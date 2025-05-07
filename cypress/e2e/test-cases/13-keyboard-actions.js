/// <reference types="Cypress"/>

describe('zTemp', function() {

    it('testSpec', function() {
        /************************************************************
        cy.visit("http://demo.automationtesting.in/Register.html")
            //=============Control click============
            cy.get(".nav > :nth-child(3) > a").type('{ctrl}enter')
            cy.go('back')
            cy.wait(2000)
            cy.go('forward')
            cy.go('back')
        ***************************************************************
        //=============Same as click============
        cy.get(':nth-child(1) > .ng-pristine').as('maleRadBtn')
        cy.get('@maleRadBtn').type('{enter}')
        ***************************************************************/

        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
        cy.wait(2000)
        cy.get("input#autocomplete").as('dynamicDropdown')
        cy.get('@dynamicDropdown').type('ind')
        cy.wait(2000)
        cy.get('@dynamicDropdown').type('{downarrow}')
        cy.get('@dynamicDropdown').type('{downarrow}')
        cy.get('@dynamicDropdown').type('{uparrow}') // without delay it doesn't work
        cy.get('@dynamicDropdown').type('{enter}')

    })

})