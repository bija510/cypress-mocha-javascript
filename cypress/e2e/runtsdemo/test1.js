/// <reference types = "Cypress" />

describe('first_Suite', function() {

    /*============================================================================
     1. Cypress Only support CSS-Selector
     2. We can see what happen on every step with screenshot & error msg in cypress
     3. Promise comes with rejection, resolved , pending WE USE :- then() to solve promise 
        in any non cypress command like text() which is JQuery
    ==============================================================================*/
    it('first_Method', function() {

        //OpenURL visit()
        cy.visit("http://demo.automationtesting.in/Register.html");

        //Direct SendKeys()
        cy.get(':nth-child(1) > :nth-child(2) > .form-col').type('David');

        //WebElement SendKeys() & verify
        cy.get(':nth-child(1) > :nth-child(3) > .form-control').as('lastName_txt')
        cy.get('@lastName_txt').type('Johnson').should('have.value', 'Johnson');

        //WebElement Click using Aliasing(as)
        cy.get(':nth-child(1) > .ng-pristine').as('male_rad');
        cy.get('@male_rad').click();

        cy.get('#submitbtn').as('submit_btn');
        cy.get('@submit_btn').click();


    });

});