/// <reference types = "Cypress" />

describe('Assertions', function() {

    it('AssertInMoca', function() {
        cy.visit("http://demo.automationtesting.in/Register.html");

        cy.title().should('eq', 'Register')
        expect("apple").to.equal("apple")
        expect(true).to.be.true
        cy.get(":nth-child(1) > :nth-child(2) > .form-control").type('apple').should('have.value', "apple")

        cy.get('#checkbox1').check().should('be.checked').and('have.value', 'Cricket')
        cy.wait(2000) // wait for 2 seconds

        expect('FooBar').to.match(/bar$/i)

        cy.get('#checkbox1').uncheck().should('not.be.checked')

    });

});