describe('User can see information in my About page.', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('#about-tab').click();
  })

  it('Displays the bio from about me page.', () => {
    cy.get('#AboutContent').within(() => {
      cy.get('#AboutTitle').should('contain', 'About me');
      cy.get('p').should('contain', 'My name is Jaime Cruz, a newcomer');
    })
  });

  it('Displays Tools & Technologies', () => {
    cy.get('#ListLanguages').within(() => {
      cy.get('li').should('contain', 'Html5');
      cy.get('li').should('contain', 'Css');
      cy.get('li').should('contain', 'JavaScript');
      cy.get('li').should('contain', 'Ruby');
    })
    cy.get('#ListFrameworks').within(() => {
      cy.get('li').should('contain', 'React.js');
      cy.get('li').should('contain', 'Ruby on Rails');
      cy.get('li').should('contain', 'Node.js');
    })
  });

  it('Can click on GitHub logo', () => {
    cy.get('#logos_images').within(() => {
      cy.get('#GitHubLogo').click();
    })
  });

  it('Can click on Linkedin Logo', () => {
    cy.get('#logos_images').within(() => {
      cy.get('#LinkedinLogo').click();
    })
  });
});