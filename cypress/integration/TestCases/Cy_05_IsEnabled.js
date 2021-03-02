/// <reference types = "Cypress" />

describe('IsEnableO_NotEnabled', function() {

    beforeEach('setUp', function() {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/');

    })

    it('isEnabled', function() {
        cy.get("#displayed-text").should('be.visible')
        cy.get("input[id='hide-textbox']").click()
        cy.get("#displayed-text").should('not.be.visible')

        cy.get("input[id='show-textbox']").click()
        cy.get("#displayed-text").should('be.visible')

    })



})