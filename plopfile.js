const config = require('./config');

module.exports = function (plop) {
  plop.setGenerator('docs', {
    description: 'Generate usage docs',
    prompts: [],
    actions: function () {
      const [actions, index] = Object.keys(config).reduce(
        ([arr, index], dir) => {
          const name = config[dir].name;
          const thumbnail = config[dir].thumbnail;
          arr.push({
            type: 'add',
            path: `docs/${dir}.md`,
            templateFile: 'templates/variant.hbs',
            force: true,
            data: {
              dir,
              name,
              thumbnail,
              variants: config[dir].variants,
              colours: config[dir].colours,
            },
          });
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
