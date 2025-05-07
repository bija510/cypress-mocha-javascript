/// <reference types = "Cypress" />

describe('first_Suite', function() {

    /*============================================================================
     1. Cypress Only support CSS-Selector
     2. We can see what happen on every step with screenshot & error msg in cypress
     3. Promise comes with rejection, resolved , pending WE USE :- then() to solve promise 
        in any non cypress command like text() which is JQuery
    ==============================================================================*/
    it('fsirst_Method', function() {
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