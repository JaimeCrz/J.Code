
describe('User can see list of projects', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
        cy.get('#CV-tab').click();
    })


    it('displays Actual work', () => {
        cy.get('#curriculum-1').within(() => {
            cy.get(('.image')).should('exist');
            cy.get('.ui.header').should('contain', 'Actual work');
            cy.get('.description').should('contain', "Working on Alphabet, in the DeepMind section");
        })
    });

    it('displays work place', () => {
        cy.get('#curriculum-2').within(() => {
            cy.get(('.image')).should('exist');
            cy.get('.ui.header').should('contain', 'My First work.');
            cy.get('.description').should('contain', 'This was my first work place.');
        })
    });

    it('displays last education', () => {
        cy.get('#curriculum-3').within(() => {
            cy.get(('.image')).should('exist');
            cy.get('.ui.header').should('contain', 'My Last education');
            cy.get('.description').should('contain', 'This was my last place to study');
        })
    });
});