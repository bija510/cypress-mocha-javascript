/// <reference types="Cypress"/>

describe('zTemp', function() {

    it('testSpec', function() {
        cy.visit("http://demo.automationtesting.in/Register.html")
        cy.get(":nth-child(1) > :nth-child(2) > .form-control").type("David").should('have.value', 'David')
            // cy.get(':nth-child(1) > .ng-pristine').type()
        cy.scrollTo('bottom')
        cy.wait(3000)
        cy.scrollTo('top')
    })

})