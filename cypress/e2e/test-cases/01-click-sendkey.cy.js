/// <reference types = "cypress" />

describe('first_Suite', function () {


    it('first_Method', function () {
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
        cy.get('#input-firstname').type('David');

        cy.get('#input-lastname').as('txt_lastName')
        cy.get('@txt_lastName').type('Johnson').should('have.value', 'Johnson');

        cy.get('#input-email').as('txt_email');
        cy.get('@txt_email').type('abc@gmail.com').should('have.value', 'abc@gmail.com');

        cy.get('input[type="submit"]').as('btn_continue');
        cy.get('@btn_continue').click();
    });

});