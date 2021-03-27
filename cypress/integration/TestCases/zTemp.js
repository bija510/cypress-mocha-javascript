/// <reference types="Cypress"/>

describe('zTemp', () => {

    it('testSpec', () => {
        cy.visit("http://admin:admin@the-internet.herokuapp.com/")
        cy.get(":nth-child(1) > :nth-child(2) > .form-control").type("David").should('have.value', 'David')
            // cy.get(':nth-child(1) > .ng-pristine').type()
        cy.scrollTo('bottom')
        cy.wait(3000)
        cy.scrollTo('top')

    })
})