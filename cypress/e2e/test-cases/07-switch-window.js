/// <reference types = "cypress" />

/***********************************************************************************
 * Cypress have ability to manuplae the DOM
it's not possible to handle child window through Cypress.
it's say just try to open in same current window so cypress will handle
So we have to remove the target attribute
but we have work around to handle this 
main goal is to build non flakey test== means consticent result
so they support all jQuery and browser event but only cypress do stable thing
*************************************************************************************/

describe('SwitchWindow', function() {

    beforeEach('setUp', function() {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/');

    })

    it('switchWindowUsingRemove', function() { // removeAttribute from Jquery cypress support all jquery function
        cy.get('#opentab').invoke('removeAttr', 'target').click()
            //how to get the current URL
        cy.url().should('include', 'index') //Assertion to verify we on right page
            //cy.get("div[class='header-upper'] li:nth-child(4) a:nth-child(1)").click()
        cy.go('back')

    })


})