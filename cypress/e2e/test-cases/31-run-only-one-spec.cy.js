/// <reference types="cypress" />


describe("PrintAndGetTextSuite", function() {

    it("testSpec1", function() {

        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

        cy.get('#content h1').as('lbl_pageHeader');
        cy.get('@lbl_pageHeader').then(function(headerlbl) {
            const headerText = headerlbl.text() //Storing in variable & test() method is jquery so we need to resolve promise by then(function..)
            cy.log(headerText) // or will print in the cypress dashboard console
            console.log(headerText) //will print in dev tool console
        })

        cy.get('@lbl_pageHeader').should('have.text', 'Register Account')

    });

   
    it("testSpec2", function() {
        cy.visit('https://qaclickacademy.github.io/protocommerce/');
        cy.get(':nth-child(1) > .form-control').type('David');
        cy.get(':nth-child(2) > .form-control').type('david@gmail.com');
    });


     it.only("testSpec3", function() {
        cy.visit('https://qaclickacademy.github.io/protocommerce/');
        cy.get(':nth-child(1) > .form-control').type('David');
        cy.get(':nth-child(2) > .form-control').type('david@gmail.com');
    });


});