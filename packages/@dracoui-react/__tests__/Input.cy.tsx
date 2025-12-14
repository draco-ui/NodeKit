/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import { Input } from './Input';

describe('Input Component', () => {
  describe('Rendering', () => {
    it('should render with default props', () => {
      cy.mount(<Input placeholder="Enter text" />);
      cy.get('input').should('exist').and('have.attr', 'placeholder', 'Enter text');
    });

    it('should render with different sizes', () => {
      const sizes = ['small', 'medium', 'large'] as const;

      sizes.forEach((size) => {
        cy.mount(<Input size={size} placeholder={`${size} input`} />);
        cy.get('input')
          .parent()
          .should('have.class', `draco-input--${size}`);
      });
    });

    it('should render in disabled state', () => {
      cy.mount(<Input disabled placeholder="Disabled input" />);
      cy.get('input').should('be.disabled');
    });

    it('should render with label', () => {
      cy.mount(<Input label="Username" placeholder="Enter username" />);
      cy.contains('Username').should('exist');
      cy.get('input').should('have.attr', 'placeholder', 'Enter username');
    });

    it('should render with error state', () => {
      cy.mount(<Input error="This field is required" placeholder="Error input" />);
      cy.contains('This field is required').should('exist');
    });
  });

  describe('Interactions', () => {
    it('should handle text input', () => {
      cy.mount(<Input placeholder="Type here" />);

      cy.get('input').type('Hello World');
      cy.get('input').should('have.value', 'Hello World');
    });

    it('should handle onChange events', () => {
      const onChangeSpy = cy.spy().as('onChangeSpy');
      cy.mount(<Input onChange={onChangeSpy} placeholder="Type here" />);

      cy.get('input').type('Test');
      cy.get('@onChangeSpy').should('have.been.called');
    });

    it('should handle controlled input', () => {
      const ControlledInput = () => {
        const [value, setValue] = React.useState('');

        return (
          <div>
            <Input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Controlled"
            />
            <div data-testid="output">{value}</div>
          </div>
        );
      };

      cy.mount(<ControlledInput />);
      cy.get('input').type('Controlled Value');
      cy.get('[data-testid="output"]').should('contain', 'Controlled Value');
    });

    it('should not accept input when disabled', () => {
      cy.mount(<Input disabled placeholder="Disabled" />);

      cy.get('input').should('be.disabled');
      cy.get('input').type('Test', { force: true });
      cy.get('input').should('have.value', '');
    });

    it('should handle different input types', () => {
      const types = ['text', 'email', 'password', 'number'] as const;

      types.forEach((type) => {
        cy.mount(<Input type={type} placeholder={`${type} input`} />);
        cy.get('input').should('have.attr', 'type', type);
      });
    });
  });

  describe('Accessibility', () => {
    it('should have proper label association', () => {
      cy.mount(<Input label="Email Address" id="email-input" />);

      cy.get('label').should('have.attr', 'for', 'email-input');
      cy.get('input').should('have.attr', 'id', 'email-input');
    });

    it('should be focusable', () => {
      cy.mount(<Input placeholder="Focus me" />);
      cy.get('input').focus().should('have.focus');
    });

    it('should show error message to screen readers', () => {
      cy.mount(<Input error="Invalid input" placeholder="Error" />);

      cy.contains('Invalid input').should('exist');
    });

    it('should support aria-label', () => {
      cy.mount(<Input aria-label="Search" placeholder="Search..." />);
      cy.get('input').should('have.attr', 'aria-label', 'Search');
    });
  });

  describe('Visual Regression', () => {
    it('should match snapshot for all sizes', () => {
      cy.mount(
        <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
          <Input size="small" placeholder="Small input" />
          <Input size="medium" placeholder="Medium input" />
          <Input size="large" placeholder="Large input" />
        </div>
      );
      cy.matchImageSnapshot('input-sizes');
    });

    it('should match snapshot for states', () => {
      cy.mount(
        <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
          <Input placeholder="Normal" />
          <Input placeholder="Disabled" disabled />
          <Input placeholder="With error" error="Error message" />
          <Input placeholder="With label" label="Label" />
        </div>
      );
      cy.matchImageSnapshot('input-states');
    });
  });
});
