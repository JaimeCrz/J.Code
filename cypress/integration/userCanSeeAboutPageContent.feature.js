describe('User can see list of projects', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('#about-tab').click();
  })

  it('Displays the bio from about me page.', () => {
    cy.get('#AboutContent').within(() => {
      cy.get('#AboutTitle').should('contain', 'About me');
      cy.get('#p').should('contain', 'My name is Jaime Cruz, a newcomer');
    })
  });

  it('Displays Tools & Technologies', () => {
    cy.get('#ListLanguages').within(() => {
      cy.get('.').should('contain', 'Library App');
      cy.get('').should('contain', 'Library application based on ruby');
    })
    cy.get('#ListFrameworks').within(() => {
      cy.get('').should('contain', 'Library App');
      cy.get('').should('contain', 'Library application based on ruby');
    })
  });

  it('Can click on GitHub logo', () => {
    cy.get('#logos_images').within(() => {
      cy.get('GitHubLogo').click();
    })
  });

  it('Can click on Linkedin Logo', () => {
    cy.get('#logos_images').within(() => {
      cy.get('LinkedinLogo').click();
    })
  });
});