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
        '#1C1E23': '#0a0a0a',
      },
    },
    modulePrefix: 'dracoui',
    environment,
    rootURL: '/',
    locationType: 'history',
    EmberENV: {
      EXTEND_PROTOTYPES: false,
      FEATURES: {
        // Enable experimental features here if needed
      },
    },
    APP: {
      // Flags/options for your application instance
    },
    'ember-meta': {
      description: 'Design System',
      siteName: 'Draco Design System',
      title: 'Draco Design System',
      url: 'https://dracoui.corinvo.design',
    },
  };

  if (environment === 'development') {
    // Uncomment for development logging:
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    ENV.locationType = 'none';
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;
    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // Production-specific configurations
  }

  return ENV;
};
