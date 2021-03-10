/// <reference types = "Cypress" />

describe('check_checkbox', function() {

    beforeEach('setUp', function() {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/');
        //cy.visit("http://demo.automationtesting.in/Register.html")

    })

    it('Check_single_checkBox', function() {

        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

    })

    it('check_multiple_checkbox', function() {
        cy.get("input[type='checkbox']").check(['option2', 'option3']) // value= option1 // css= commonCss
            //cy.get('[id*="checkbox"]').check(['Cricket', 'Movies', 'Hockey']).should('be.checked')
    })


})