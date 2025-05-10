/// <reference types="cypress-xpath" />
/// <reference types="cypress" />


describe('Tag test', () => {
  it('enterFirstName @sanity', function () {
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
        cy.xpath("//input[@id='input-firstname']").type('David');

    });

  it('enterLastName', function () {
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/register");       
        cy.get('#input-lastname').as('txt_lastName')
        cy.get('@txt_lastName').type('Johnson').should('have.value', 'Johnson');
       
    });
});