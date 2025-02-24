'use strict';

const houston = require('tm-themes/themes/houston.json');

module.exports = function (environment) {
  const ENV = {
    'ember-showdown-shiki': {
      bundledThemes: ['houston'],
      theme: 'houston',
      languages: ['javascript', 'handlebars', 'go'],
      colorReplacements: {
        '#24292e': '#1c1e24',
        '#1C1E23': '#0a0a0a'
      },
    },
    modulePrefix: 'dracoui',
    googleFonts: [
      'Geist:400,600,700',
      'Fira+Code:400'
    ],
    environment,
    rootURL: '/',
    locationType: 'history',
    EmberENV: {
      EXTEND_PROTOTYPES: false,
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    'ember-meta': {
      description: 'Design System',
      siteName: 'Draco Design System',
      title: 'Draco Design System',
      url: 'https://dracoui.corinvo.design',
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
