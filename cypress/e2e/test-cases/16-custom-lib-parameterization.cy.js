/// <reference types = "cypress" />

describe('DataDrivenSuite', function() {
    before(function() {
            // runs once before all tests in the block
            // we need to make data global and need to resolve  promise
            cy.fixture('example').then(function(data) {
                this.data = data // this keyword make it available in entire class (make's it Global)
            })
        })
        /*================================================================================
         1. cy.selectProduct(element) = CUstom library inside support/commands path
         2. and we are parameterization list (productName) from JSON file
         ================================================================================*/

    it('dataDriven', function() {
        cy.visit('https://qaclickacademy.github.io/protocommerce/')
        cy.get(':nth-child(2) > .nav-link').click()
        this.data.productName.forEach(function(element) {
            cy.selectProduct(element) //parameterize test with multiple set of data array from JSON file
        })

    })

})