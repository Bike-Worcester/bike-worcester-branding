# Bike Worcester Branding

A collection of brand guidelines and resources for Bike Worcester and its associated projects.

---

## [Download resources here >>>](docs/index.md)

---

## Installation

Clone this repository and install its dependencies:

```bash
git clone https://github.com/Bike-Worcester/bike-worcester-branding.git
cd ./bike-worcester-branding
pnpm install
```

## Building

To generate images from the `src` vector files:

```bash
pnpm run build
```

Images will be saved to the `assets` directory and usage docs generated in the `docs` directory.

## Extending and editing

The build process reads from the `config.js` file. Make changes there, then run `pnpm run build` to regenerate assets and docs.

When designing new artwork, follow these guidelines:

- Convert all strokes and text to paths, and keep the use of groups to a minimum.
- Keep the document to 1024 pixels wide and proportionally high according to the aspect ratio.
- Round all proportionally scaled heights to the nearest pixel.
- Always save as a plain svg file to 2 decimal places (if export settings allow).
- When saving mono files:
  - remove all fill and stroke colours
  - convert all strokes to paths
  - reduce to a single compound path and fill black
- When saving multicolour files:
  - set the shapes to be coloured to pure black
  - set the background to pure white

_Note: Some applications generate messy non-standard svg files, so always check the exported svg file in a web browser._

## Troubleshooting

### Build process fails reading `controlPoint`

If the build process fails with this `svgo` error, open the original svg file in [svgomg](https://jakearchibald.github.io/svgomg/) and save it again. This will clean up the file and remove any non-standard attributes.
