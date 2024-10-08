const config = require('./config');

module.exports = function (plop) {
  plop.setGenerator('docs', {
    description: 'Generate usage docs',
    prompts: [],
    actions: function () {
      const [actions, index] = Object.keys(config).reduce(
        ([arr, index], dir) => {
          const name = config[dir].name;
          const href = name.toLowerCase().replace(/ /g, '-');
          const thumbnail = config[dir].thumbnail;
          const typography = config[dir].typography;
          arr.push(
            {
              type: 'add',
              path: `docs/${dir}.md`,
              templateFile: 'templates/variant.hbs',
              force: true,
              data: {
                dir,
                name,
                thumbnail,
                variants: config[dir].variants,
                colours: Object.keys(config[dir].colours),
                typography,
              },
            },
            ...config[dir].variants.map((props) => ({
              type: 'add',
              path: `docs/${dir}-${props.file}.md`,
              templateFile: 'templates/assets.hbs',
              force: true,
              data: {
                ...props,
                dir,
                parentName: name,
                colours: Object.keys(config[dir].colours),
              },
            })),
          );
          index.push({
            name,
            dir,
            thumbnail: config[dir].variants.find(
              ({ file }) => file === config[dir].thumbnail,
            ),
          });
          return [arr, index];
        },
        [[], []],
      );
      actions.push({
        type: 'add',
        path: `docs/index.md`,
        templateFile: 'templates/index.hbs',
        force: true,
        data: { assets: index },
      });
      return actions;
    },
  });
};
