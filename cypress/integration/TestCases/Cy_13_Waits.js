/// <reference types = "Cypress" />

describe('Waiting', function() {

    it('Waits', function() {
        cy.visit("http://demo.automationtesting.in/Loader.html");
        cy.contains('Run').click()

        //Implicit Wait
        // cy.get("button[class='btn btn-default']", { timeout: 60000 }).click()

        //Explicit Wait
        cy.get("button[class='btn btn-default']", { timeout: 150000 }).click().should(($x) => {
            expect($x).to.be.null
        })

    });

});