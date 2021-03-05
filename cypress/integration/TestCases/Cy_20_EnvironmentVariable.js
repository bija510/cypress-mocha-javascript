/*==================================================================
1. To declare environment variable we put this in cypress.json file 
"env": {
        "url": "https://qaclickacademy.github.io/protocommerce/"
    }
2. Cypress.env("url") will give string url
=================================================================*/

/// <reference types = "Cypress" />

describe('EnvironmentalVariableOrProfile', function() {

    it('EnvironmentVariable', function() {
        //cy.visit(Cypress.env('url')) // we are getting environment variable url+ 
        cy.visit(Cypress.env('url') + "/protocommerce/")
    })

})