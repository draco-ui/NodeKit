import { Button } from '../src';

describe('Button Component', () => {
  it('renders with default props', () => {
    cy.mount(<Button>Click me</Button>);
    cy.get('.draco-button').should('exist');
    cy.get('.draco-button').should('have.class', 'draco-button--primary');
    cy.get('.draco-button').should('have.class', 'draco-button--medium');
  });

  it('renders with different variants', () => {
    cy.mount(<Button variant="secondary">Secondary</Button>);
    cy.get('.draco-button').should('have.class', 'draco-button--secondary');
  });

  it('renders with different sizes', () => {
    cy.mount(<Button size="small">Small</Button>);
    cy.get('.draco-button').should('have.class', 'draco-button--small');
  });

  it('renders with different shapes', () => {
    cy.mount(<Button shape="pill">Pill</Button>);
    cy.get('.draco-button').should('have.class', 'draco-button--pill');
  });

  it('renders full width', () => {
    cy.mount(<Button fullWidth>Full Width</Button>);
    cy.get('.draco-button').should('have.class', 'draco-button--full-width');
  });

  it('renders in loading state', () => {
    cy.mount(<Button loading>Loading</Button>);
    cy.get('.draco-button').should('have.class', 'draco-button--loading');
  });

  it('renders disabled state', () => {
    cy.mount(<Button disabled>Disabled</Button>);
    cy.get('.draco-button').should('be.disabled');
  });

  it('handles click events', () => {
    const onClick = cy.stub().as('onClick');
    cy.mount(<Button onClick={onClick}>Click me</Button>);
    cy.get('.draco-button').click();
    cy.get('@onClick').should('have.been.calledOnce');
  });

  it('does not trigger click when disabled', () => {
    const onClick = cy.stub().as('onClick');
    cy.mount(<Button disabled onClick={onClick}>Disabled</Button>);
    cy.get('.draco-button').click({ force: true });
    cy.get('@onClick').should('not.have.been.called');
  });
});
