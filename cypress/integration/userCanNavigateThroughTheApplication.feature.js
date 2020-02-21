describe('User can navigate the app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  describe('to About tab and it', () => {
    beforeEach(() => {
      cy.get('#about-tab').click();
    });

    it('displays About Me header', () => {
      cy.get('#about-header').should('contain', 'About Me');
    });

    it('displays component name in url', () => {
      cy.url().should("contain", "about");
    })

    it('does not display My Projects header ', () => {
      cy.get('#projects-header').should('not.exist');
    });

    it('does not display Hello world', () => {
      cy.get('#hello').should('not.exist');
    });
  });

  describe('to CV tab and it', () => {
    beforeEach(() => {
      cy.get('#CV-tab').click();
    });

    it('displays CV header', () => {
      cy.get('#CV-header').should('contain', 'CV');
    });

    it('displays CV component name in url', () => {
      cy.url().should("contain", "cv");
    })
  });



describe('to Skills tab and it', () => {
  beforeEach(() => {
    cy.get('#skill-tab').click();
  });

  it('displays Skills Me header', () => {
    cy.get('#skills-header').should('contain', 'Skills');
  });

  it('displays component name in url', () => {
    cy.url().should("contain", "skills");
  })
});
    });



describe('to My Projects tab and it', () => {
  beforeEach(() => {
    cy.get('#projects-tab').click();
  });

  it('displays My Projects header', () => {
    cy.get('#projects-header').should('contain', 'Projects');
  });

  it('displays component name in url', () => {
    cy.url().should("contain", "projects");
  })

  it('does not display About Me header ', () => {
    cy.get('#about-header').should('not.exist');
  });

  it('does not display Hello world', () => {
    cy.get('#hello').should('not.exist');
  });
});

describe('back to J.Cruz/Hello tab and it', () => {
  beforeEach(() => {
    cy.get('#about-tab').click();
    cy.get('#header').click();
  });

  it('displays Hello World', () => {
    cy.get('#hello').should('contain', 'Hello');
  });

  it('displays correct url', () => {
    cy.url()
      .should("not.contain", "projects")
      .and("not.contain", "about");
  })

  it('does not display About Me header ', () => {
    cy.get('#about-header').should('not.exist');
  });

  it('does not display My Projects header', () => {
    cy.get('#projects-header').should('not.exist');
  });
});