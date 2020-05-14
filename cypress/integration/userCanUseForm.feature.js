describe('User can see list of projects', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('#contact-tab').click();
  })

  it('Displays the Contact form', () => {
    cy.get('#contact-form').within(() => {
      cy.get("#email").type("random@mail.com");
      cy.get("#name").type("register@mail.com");
      cy.get("#content").type("Hello! I would like to contact you regarding this work specific work");
      cy.get('button').contains('Send').click();
  });
  cy.get("#success-message").should("contain", "Thank you for contacting me, I'll reply shortly.");
  });
});