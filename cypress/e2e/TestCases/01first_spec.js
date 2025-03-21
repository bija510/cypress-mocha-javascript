/// <reference types="Cypress" />

describe('testSuite', function() {
    it('ecommerce page', function() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='Username']").type('Admin')
        cy.wait(2000)
        cy.get("input[placeholder='Password']").type('admin123')

        // Validate brand text
        cy.get("button[type='submit']").click();
    })
})