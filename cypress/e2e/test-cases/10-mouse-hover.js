/// <reference types = "cypress" />

/*
* elements, so we use jQuery methods like `text()` and `removeAttr()` to manipulate the DOM.
* Since jQuery operations return non-Cypress promises, we need to manually resolve them.
* Note: The "Top" and "Reload" elements are hidden by default. Cypress can still interact with 
* them using `.click({ force: true })` to bypass visibility restrictions.
*/

describe('WebTableFunction', function() {

    beforeEach('setUp', function() {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/');

    })

    it('getAnytableTdTest', function() {
        cy.get('.mouse-hover-content').invoke('show') //child of mouse hover Btn to show hidden element .
        cy.contains('Top').click()
        cy.url().should('include', 'top')


    })

})