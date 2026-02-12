/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import commands
import './commands';

// Import styles
import '../../../@dracoui/dracoui-styles/dist/css/styles.css';

// Mount React component with proper setup
import { mount } from '@cypress/react18';
import * as React from 'react';

// Augment the Cypress namespace to include type definitions
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

// Set up theme support for components
Cypress.Commands.add('mount', (component, options = {}) => {
  const wrapped = React.createElement(
    'div',
    {
      'data-color-mode': 'light',
      'data-light-theme': 'light',
      'data-dark-theme': 'dark',
      style: {
        padding: '2rem',
        backgroundColor: 'var(--draco-background-primary)',
        minHeight: '100vh',
      },
    },
    component
  );

  return mount(wrapped, options);
});
