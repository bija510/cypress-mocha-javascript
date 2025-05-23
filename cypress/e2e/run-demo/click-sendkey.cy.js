/// <reference types = "cypress" />

describe.only('basicActionSuite', () => {


    it.only('typeAction @smoke', () => {
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
        cy.get('#input-firstname').type('David');

        cy.get('#input-lastname').as('txt_lastName')
        cy.get('@txt_lastName').type('Johnson').should('have.value', 'Johnson');
       
    });

});