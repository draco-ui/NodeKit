/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

// Add image snapshot command
addMatchImageSnapshotCommand({
  failureThreshold: 0.03, // 3% threshold
  failureThresholdType: 'percent',
  customDiffConfig: { threshold: 0.1 },
  capture: 'viewport',
});

// Custom Cypress commands for component testing

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to test accessibility
       * @example cy.checkA11y()
       */
      checkA11y(): Chainable<void>;

      /**
       * Custom command to change theme
       * @example cy.setTheme('dark')
       */
      setTheme(theme: 'light' | 'dark'): Chainable<void>;
    }
  }
}

// Change theme command
Cypress.Commands.add('setTheme', (theme: 'light' | 'dark') => {
  cy.document().then((doc) => {
    doc.documentElement.setAttribute('data-color-mode', theme);
  });
});

// Basic accessibility check
Cypress.Commands.add('checkA11y', () => {
  cy.get('*').should('be.visible');
  // You can integrate axe-core here for more thorough a11y testing
  // cy.injectAxe();
  // cy.checkA11y();
});

export {};
