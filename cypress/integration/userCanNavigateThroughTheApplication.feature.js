describe('User can navigate the app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  describe('to About tab and it', () => {
    beforeEach(() => {
      cy.get('#about-tab').click();
    });

    it('displays About Me header', () => {
      cy.contains('About me');
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
      cy.get('#cv-tab').click();
    });

    it('displays CV header', () => {
      cy.contains('Curriculum Vitae');
    });

    it('displays CV component name in url', () => {
      cy.url().should("contain", "cv");
    })
  });

  describe('to skills tab and it', () => {
    beforeEach(() => {
      cy.get('#skills-tab').click();
    });

    it('displays Skills header', () => {
      cy.contains('Skills');
    });

    it('displays CV component name in url', () => {
      cy.url().should("contain", "skills");
    })
  });
});

describe('to Projects tab and it', () => {
  beforeEach(() => {
    cy.get('#projects-tab').click();
  });

  it('displays My Projects header', () => {
    cy.contains('Projects');
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