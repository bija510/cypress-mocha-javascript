/// <reference types = "cypress" />

describe('DataDrivenSuite', function() {
    before(function() {
        // runs once before all tests in the block
        // we need to make data global and need to resolve  promise
        cy.fixture('example').then(function(data) {
            this.data = data // this keyword make it available in entire class (make's it Global)
        })
    })

    it('dataDriven', function() {
        cy.visit('https://qaclickacademy.github.io/protocommerce/')
        cy.get("div[class='form-group'] input[name='name']").type(this.data.name)
        cy.get("#exampleFormControlSelect1").select(this.data.gender)
        cy.get(":nth-child(4) > .ng-untouched").should('have.value', this.data.name)
        cy.get("div[class='form-group'] input[name='name']").should('have.attr', 'minlength', '2')
        cy.get("#inlineRadio3").should('be.disabled')

    })

})