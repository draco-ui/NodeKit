import { Button } from '../src';

describe('Button Component', () => {
  it('renders with default props', () => {
    cy.mount(<Button>Click me</Button>);
    cy.get('.DracoButton').should('exist');
    cy.get('.DracoButton').should('have.class', 'DracoButton--Primary');
    cy.get('.DracoButton').should('have.class', 'DracoButton--Medium');
  });

  it('renders with different variants', () => {
    cy.mount(<Button variant="secondary">Secondary</Button>);
    cy.get('.DracoButton').should('have.class', 'DracoButton--Secondary');
  });

  it('renders with different sizes', () => {
    cy.mount(<Button size="small">Small</Button>);
    cy.get('.DracoButton').should('have.class', 'DracoButton--Small');
  });

  it('renders with different shapes', () => {
    cy.mount(<Button shape="pill">Pill</Button>);
    cy.get('.DracoButton').should('have.class', 'DracoButton--Pill');
  });

  it('renders full width', () => {
    cy.mount(<Button fullWidth>Full Width</Button>);
    cy.get('.DracoButton').should('have.class', 'DracoButton--FullWidth');
  });

  it('renders in loading state', () => {
    cy.mount(<Button loading>Loading</Button>);
    cy.get('.DracoButton').should('have.class', 'DracoButton--Loading');
  });

  it('renders disabled state', () => {
    cy.mount(<Button disabled>Disabled</Button>);
    cy.get('.DracoButton').should('be.disabled');
  });

  it('handles click events', () => {
    const onClick = cy.stub().as('onClick');
    cy.mount(<Button onClick={onClick}>Click me</Button>);
    cy.get('.DracoButton').click();
    cy.get('@onClick').should('have.been.calledOnce');
  });

  it('does not trigger click when disabled', () => {
    const onClick = cy.stub().as('onClick');
    cy.mount(<Button disabled onClick={onClick}>Disabled</Button>);
    cy.get('.DracoButton').click({ force: true });
    cy.get('@onClick').should('not.have.been.called');
  });
});
