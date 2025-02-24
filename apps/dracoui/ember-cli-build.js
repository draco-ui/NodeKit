'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const autoprefixer = require('autoprefixer');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        includePaths: ['app'],
        cacheInclude: [
          /.*\.hbs$/,
          /.*\.css$/,
          /.*\.html$/,
          /.tailwind\/config\.js$/,
        ],
        plugins: [
          require('postcss-import')({ path: ['node_modules'] }),
          require('tailwindcss')('./tailwind.config.js'),
          autoprefixer,
        ],
      },
    },
  });

  return app.toTree();
};
