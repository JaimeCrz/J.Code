
describe('User can see the list of my CV', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
        cy.get('#cv-tab').click();
    })


    it('displays Working at', () => {
        cy.get('#curriculum-1').within(() => {            
            cy.get('.ui.header').should('contain', 'Working at:');
            cy.get('.description').should('contain', "Alphabet, in the DeepMind section");
        })
    });

    it('displays work place', () => {
        cy.get('#curriculum-2').within(() => {            
            cy.get('.ui.header').should('contain', 'First work place:');
            cy.get('.description').should('contain', 'M.C nuggets at San Francisco');
        })
    });

    it('displays last education', () => {
        cy.get('#curriculum-3').within(() => {            
            cy.get('.ui.header').should('contain', 'Last Education:');
            cy.get('.description').should('contain', 'Software engineer degree at CraftAcademy');
        })
    });
});