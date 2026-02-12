/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

describe('Storybook E2E Tests', () => {
  beforeEach(() => {
    // Visit Storybook homepage
    cy.visit('/');
  });

  it('should load Storybook successfully', () => {
    cy.get('#storybook-explorer-tree').should('exist');
    cy.contains('Storybook').should('be.visible');
  });

  it('should navigate to Button stories', () => {
    // Navigate to Button component
    cy.get('#storybook-explorer-tree').contains('Button').click();

    // Check if canvas is visible
    cy.get('#storybook-preview-iframe').should('exist');
  });

  it('should switch between light and dark theme', () => {
    // Find and click theme toggle
    cy.get('[title="Change the theme"]').click();

    // Select dark theme
    cy.contains('Dark').click();

    // Verify theme changed
    cy.document().then((doc) => {
      const dataTheme = doc.documentElement.getAttribute('data-color-mode');
      expect(dataTheme).to.equal('dark');
    });
  });

  it('should display component docs', () => {
    // Navigate to a component
    cy.get('#storybook-explorer-tree').contains('Button').click();

    // Switch to docs tab
    cy.contains('Docs').click();

    // Check if docs are displayed
    cy.get('.sbdocs').should('exist');
  });

  it('should allow interaction with controls', () => {
    // Navigate to Button component
    cy.get('#storybook-explorer-tree').contains('Button').click();

    // Open controls panel
    cy.get('[title="Show addons"]').click();

    // Verify controls panel exists
    cy.contains('Controls').should('be.visible');
  });
});
