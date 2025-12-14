/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import { Button } from './Button';

describe('Button Component', () => {
  describe('Rendering', () => {
    it('should render with default props', () => {
      cy.mount(<Button>Click me</Button>);
      cy.get('button').should('exist').and('contain', 'Click me');
    });

    it('should render with different variants', () => {
      const variants = ['primary', 'secondary', 'tertiary', 'ghost'] as const;

      variants.forEach((variant) => {
        cy.mount(<Button variant={variant}>{variant} button</Button>);
        cy.get('button')
          .should('have.class', `draco-button--${variant}`)
          .and('contain', `${variant} button`);
      });
    });

    it('should render with different sizes', () => {
      const sizes = ['small', 'medium', 'large'] as const;

      sizes.forEach((size) => {
        cy.mount(<Button size={size}>{size} button</Button>);
        cy.get('button')
          .should('have.class', `draco-button--${size}`)
          .and('contain', `${size} button`);
      });
    });

    it('should render in disabled state', () => {
      cy.mount(<Button disabled>Disabled button</Button>);
      cy.get('button').should('be.disabled');
    });

    it('should render with icon', () => {
      cy.mount(
        <Button iconStart={<span data-testid="icon">★</span>}>
          With Icon
        </Button>
      );
      cy.get('[data-testid="icon"]').should('exist');
      cy.get('button').should('contain', 'With Icon');
    });
  });

  describe('Interactions', () => {
    it('should handle click events', () => {
      const onClickSpy = cy.spy().as('onClickSpy');
      cy.mount(<Button onClick={onClickSpy}>Click me</Button>);

      cy.get('button').click();
      cy.get('@onClickSpy').should('have.been.calledOnce');
    });

    it('should not trigger click when disabled', () => {
      const onClickSpy = cy.spy().as('onClickSpy');
      cy.mount(
        <Button disabled onClick={onClickSpy}>
          Disabled
        </Button>
      );

      cy.get('button').click({ force: true });
      cy.get('@onClickSpy').should('not.have.been.called');
    });

    it('should be keyboard accessible', () => {
      const onClickSpy = cy.spy().as('onClickSpy');
      cy.mount(<Button onClick={onClickSpy}>Press Enter</Button>);

      cy.get('button').focus().type('{enter}');
      cy.get('@onClickSpy').should('have.been.called');
    });
  });

  describe('Accessibility', () => {
    it('should have proper ARIA attributes', () => {
      cy.mount(<Button aria-label="Test button">Click</Button>);
      cy.get('button').should('have.attr', 'aria-label', 'Test button');
    });

    it('should be focusable', () => {
      cy.mount(<Button>Focusable</Button>);
      cy.get('button').focus().should('have.focus');
    });

    it('should show disabled state to screen readers', () => {
      cy.mount(<Button disabled>Disabled</Button>);
      cy.get('button').should('have.attr', 'disabled');
    });
  });

  describe('Visual Regression', () => {
    it('should match snapshot for all variants', () => {
      cy.mount(
        <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      );
      cy.matchImageSnapshot('button-variants');
    });

    it('should match snapshot for all sizes', () => {
      cy.mount(
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </div>
      );
      cy.matchImageSnapshot('button-sizes');
    });
  });
});
