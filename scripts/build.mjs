import Inkscape from 'inkscape';
import colors from 'colors';
import { optimize } from 'svgo';
import { promises as fs, createReadStream, createWriteStream } from 'fs';
import config from '../config.js';
import path from 'path';

const baseDir = new URL('..', import.meta.url).pathname;
let total = 0;

const log = (dest) => {
  console.log(colors.green(dest.replace(baseDir, '')));
  total++;
};

const svgToPng = async (src, dest, width) => {
  const inkscape = new Inkscape([`--export-width=${width}`], {
    outputFormat: 'png',
    inputFormat: 'svg',
  });
  const stream = createReadStream(src)
    .pipe(inkscape)
    .pipe(createWriteStream(dest));
  await new Promise((resolve, reject) => {
    stream.on('finish', resolve);
    stream.on('error', reject);
  });
  log(dest);
};

const svgToString = async (src) => {
  const svg = await fs.readFile(src, 'utf-8');
  const { data } = optimize(svg, {
    path: src,
    multipass: true,
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
            cleanupNumericValues: {
              floatPrecision: 2,
            },
            convertColors: {
              currentColor: false,
              names2hex: true,
              rgb2hex: true,
              shorthex: false,
              shortname: false,
            },
          },
        },
      },
      {
        name: 'removeDimensions',
        active: true,
      },
    ],
  });
  return data;
};

const generateSwatch = async (dir, colour) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#${colour}" /></svg>`;
  const swatchSrc = path.resolve(
    baseDir,
    'assets',
    dir,
    `swatch-${colour}.svg`,
  );
  await fs.writeFile(swatchSrc, svg);
  await svgToPng(swatchSrc, swatchSrc.replace('.svg', '.png'), 100);
  log(swatchSrc);
};

const convert = async ({
  dir,
  file,
  size,
  mono = false,
  scalable = false,
  colours,
  sizes,
}) => {
  let src = path.resolve(baseDir, 'src', dir, `${file}.svg`);
  if (size) {
    // Convert svg to png scaled to given width
    const filename = `${dir}-${file}-${size}.png`;
    const dest = path.resolve(baseDir, 'assets', dir, filename);
    await svgToPng(src, dest, size);
  } else {
    if (scalable) {
      const str = await svgToString(src);
      // Optimise svg file and save as is
      const outPath = `${dir}-${file}.svg`;
      const dest = path.resolve(baseDir, 'assets', dir, outPath);
      await fs.writeFile(dest, str);
      log(dest);
    }
    if (mono) {
      src = path.resolve(baseDir, 'src', dir, `${file}-mono.svg`);
      const str = await svgToString(src);
      // Optimise svg then change all occurances of black to each colour and save
      await ['ffffff', '000000', ...colours].reduce(
        (promise, colour) =>
          promise.then(async () => {
            const outPath = `${dir}-${file}-mono-${colour}`;
            let dest = path.resolve(baseDir, 'assets', dir, `${outPath}.svg`);
            await fs.writeFile(dest, str.replaceAll(/#000000/gi, `#${colour}`));
            log(dest);
            await sizes.reduce(
              (_promise, size) =>
                _promise.then(async () => {
                  const dest2 = path.resolve(
                    baseDir,
                    'assets',
                    dir,
                    `${outPath}-${size}.png`,
                  );
                  await svgToPng(dest, dest2, size);
                }),
              Promise.resolve(),
            );
          }),
        Promise.resolve(),
      );
    }
  }
};

// Delete assets directory and its contents
console.log();
console.log(colors.yellow('Deleting assets directory...'));
await fs.rm(path.resolve(baseDir, 'assets'), { recursive: true });

// Creating assets
console.log(colors.yellow('Creating assets...'));
await Object.keys(config).reduce(
  (promise, dir) =>
    promise.then(async () => {
      await fs.mkdir(path.resolve(baseDir, 'assets', dir), {
        recursive: true,
      });
      await config[dir].variants.reduce(
        (p, { file, sizes: _sizes, scalable, mono }) =>
          p.then(async () => {
            const sizes = [..._sizes, 128, 256];
            await sizes
              .filter((size, i, arr) => arr.indexOf(size) === i)
              .sort()
              .reduce(
                (_p, size) => _p.then(() => convert({ dir, file, size })),
                Promise.resolve(),
              );
            await convert({
              dir,
              file,
              scalable,
              mono,
              colours: config[dir].colours,
              sizes,
            });
          }),
        Promise.resolve(),
      );
      await config[dir].colours.reduce(
        (promise, colour) =>
          promise.then(async () => {
            await generateSwatch(dir, colour);
          }),
        Promise.resolve(),
      );
    }),
  Promise.resolve(),
);

console.log();
console.log(colors.cyan.bold(total), 'assets created');
console.log();
console.log();
