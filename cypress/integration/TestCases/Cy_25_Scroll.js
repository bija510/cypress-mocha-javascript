/// <reference types="Cypress"/>

describe('Scroll', function() {

    it('scrollSpec', function() {
        cy.visit("http://demo.automationtesting.in/Register.html")

        //=========Scroll to ELement===========
        cy.get('#submitbtn').scrollIntoView()
        cy.wait(2000)
        cy.get(':nth-child(1) > :nth-child(2) > .form-control').scrollIntoView()

        //=========Scroll===========
        // cy.scrollTo('bottom')
        // cy.wait(2000)
        // cy.scrollTo('bottomLeft')
        // cy.scrollTo('bottomRight')
        // cy.wait(2000)
        // cy.scrollTo('top')
        // cy.wait(2000)
        // cy.scrollTo('topRight')
        // cy.scrollTo('topLeft')

    })

})