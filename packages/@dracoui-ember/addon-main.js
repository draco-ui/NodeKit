const { addonV1Shim } = require('@embroider/addon-shim');

const baseConfig = addonV1Shim(__dirname);

module.exports = {
  ...baseConfig,
  included(app) {
    baseConfig.included?.apply(this, arguments);
    app.import('dist/styles/index.css', {
      prepend: true
    });
  }
};
