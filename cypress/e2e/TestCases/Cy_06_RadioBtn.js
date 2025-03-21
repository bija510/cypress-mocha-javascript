/// <reference types = "Cypress" />

describe('RadioBtn', function() {

    beforeEach('setUp', function() {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/');

    })

    it('checkRadioAndVerify', function() {
        cy.get("input[value='radio2']").as('Radio2')
        cy.get('@Radio2').check()
        cy.get('@Radio2').should('be.checked')

    })

})