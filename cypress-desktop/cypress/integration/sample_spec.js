describe('Suite of tests sample feature', function(){
    it('Visiting the kitchen sink', () => {
        cy.visit('https://example.cypress.io')
        // cy.pause() --This command allow us to debug in cypress
        cy.contains('type').click()
        cy.url()
          .should('include', '/commands/actions')
        cy.get('.action-email')
          .type('fake@email.com')
          .should('have.value', 'fake@email.com')
    });

    it('', () => {
        
    });
})