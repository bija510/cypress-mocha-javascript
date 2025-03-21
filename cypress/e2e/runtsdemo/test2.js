/// <reference types="Cypress" />

/***************************************************************************
text() is not cypress command so No promise Resolved but text() is a JQuery
So we hve to handle and work in this tricky way
***************************************************************************/
describe("PrintAndGetTextSuite", function() {
    it("test_spec", function() {

        cy.visit('http://demo.automationtesting.in/Register.html');

        cy.get('h1').as('pageHeader_lbl');
        cy.get('@pageHeader_lbl').then(function(headerlbl) {
            const headerText = headerlbl.text() //Storing in variable & test() method is jquery so we need to resolve promise by then(function..)
            cy.log(headerText) // or will print in the cypress dashboard console
            console.log(headerText) //will print in dev tool console
        })

        cy.get('@pageHeader_lbl').should('have.text', 'Automation Demo Site ')

    });

    it('RecordDemoProtoCommmerce', function() {
        cy.visit('https://qaclickacademy.github.io/protocommerce/');
        cy.get(':nth-child(1) > .form-control').type('David');
        cy.get(':nth-child(2) > .form-control').type('david@gmail.com');
        cy.get('#exampleInputPassword1').type('abc123');
        cy.get('#exampleCheck1').check();
        cy.get('#exampleFormControlSelect1').select('Female');
        // cy.get(':nth-child(8) > .form-control').type('11122020');
        cy.contains('Submit').click(); // clicking the Submit btn
    });


});