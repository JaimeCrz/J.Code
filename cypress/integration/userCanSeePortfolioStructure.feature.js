describe('Portfolio interface', () => {
    it('successfully renders',() => {
      cy.visit('http://localhost:3000');
      cy.get('#header').should('contain', 'J. Cruz');
      cy.get('#footer').should('contain', 'Made by Jaime on React');      
    })
  })