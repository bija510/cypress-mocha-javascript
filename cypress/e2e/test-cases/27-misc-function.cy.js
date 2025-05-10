/// <reference types="cypress"/>

describe('Miscillinous', () => {

    it('miscSpec', () => {
        cy.visit("http://demo.automationtesting.in/Register.html")
        cy.get(".nav > :nth-child(3) > a").type('{ctrl}enter')
        cy.go('back')
        cy.wait(2000)
        cy.reload()
            //cy.reload(forceReload)
        cy.go('forward')



    })
})