const { addonV1Shim } = require('@embroider/addon-shim');

module.exports = {
  ...addonV1Shim(__dirname),
  included(app) {
    this._super.included.apply(this, arguments);

    // Include Draco's style and primitives library by default.
    app.import('node_modules/@dracoui/ember/dist/styles/@dracoui/components.css');
  }
};
