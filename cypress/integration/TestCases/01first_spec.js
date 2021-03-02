/// <reference types="Cypress" /> 

describe('testSuite', function() {

    it('ecommerce page', function() {
        cy.visit('https://www.rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('input.search-keyword').type('ca')
        cy.wait(2000)

        //cy.get("div[class='product']").should('have.length', 4)
        cy.get("div.product:visible").should('have.length', 4) //this is for using J-Qury Visible mode

        //parent child Chaining
        cy.get('div.products').as('productLocator') //@productLocator this will act like a variable
        cy.get('@productLocator').find('.product').should('have.length', 4)
        cy.get("div.product:visible").should('have.length', 4).eq(2).contains('ADD TO CART').click()

        cy.get('.products').find('.product').each(($eal, index, $list) => {
            const textVeg = $eal.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
                $eal.find('button').click()
            }

            cy.get('.brand').should('have.text', 'GREENKART')
            cy.get('.brand').then(function(logoText) {
                cy.log(logoText.text()) //text() is not a cypress command so No promise Resolved // text() is a JQuery
                console.log(logoText.text())
            })

        })

    })

})