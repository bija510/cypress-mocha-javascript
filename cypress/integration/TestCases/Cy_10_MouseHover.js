/// <reference types = "Cypress" />

/****************************************************************************************
Cypress directly not support coz it's flakey(inconstistant) so we need to use JQuery here
like text(), removeAttribute(), 
then we have to resolve the promise coz It's JQuery
Top & Reload are in hidden mode Cypress can click on hidden mode
//Click hidden element cy.get().click({force:true})
*****************************************************************************************/

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