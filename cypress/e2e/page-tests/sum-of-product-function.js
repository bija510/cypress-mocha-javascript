/// <reference types = "cypress" />

import CheckoutPage from '../../support/page-objects/checkout-page'
import SignUpPage from '../../support/page-objects/sign-up-page'
import ShopPage from '../../support/page-objects/shop-page'

describe('DataDrivenSuite', function() {
    before(function() {
        cy.fixture('example').then(function(data) {
            this.data = data
        })
    })

    it('dataDriven', function() {
        const signUpPage = new SignUpPage()

        cy.visit(Cypress.env('url') + "/protocommerce/") // we are getting environment variable url+ 

        signUpPage.getName_txt().type(this.data.name)
        signUpPage.getGender_ddl().select(this.data.gender)
        signUpPage.getTwoWayBindind_txt().should('have.value', this.data.name)
        signUpPage.getName_txt().should('have.attr', 'minlength', '2')
        signUpPage.getEntrepreneur_rad().should('be.disabled')

        signUpPage.getShop_Btn().click()
        this.data.productName.forEach(function(element) {
            cy.selectProduct(element) //parameterize test with multiple set of data array from JSON file
        })

        const shopPage = new ShopPage()
        shopPage.getCheckOut_btn().click()

        const checkoutPage = new CheckoutPage()
        checkoutPage.getCheckout_btn().click()

        /*==================================================================================================
        1. Now we need to go to cypress.json and add  "defaultCommandTimeout": 10000, this
        2. By default timeout is 4sec now we have change to 10Sec & 
        3. Make sure by going to cypressDashboard and setting/configuration==> defaultCommandTimeout": 10000 is there
         ===================================================================================================*/
        checkoutPage.getDeliveryLocationSearch_txt().type('in') //this take 8-10 sec to load
        checkoutPage.getDynamicSearchDropdownLabel_ddl().each(($el, index, $list) => {
            cy.log($el.text())
            if ($el.text() == "India") {
                cy.wrap($el).click()
            }

        }).then(function() {
            checkoutPage.getDeliveryLocationSearch_txt().should('have.value', "India")
        })
        checkoutPage.getIAgree_chx().click({ force: true }) //We are forcing click because cannot click it was overlap by another element
        checkoutPage.getPurchase_btn().click()
        checkoutPage.getAlertMsg().then(function(text_alertElement) {
            const actualText = text_alertElement.text()
            expect(actualText.includes("Success")).to.be.true
        })

        //==============This test case start from here=================
        checkoutPage.getCheckOutBtn().click()
        var sum = 0
        checkoutPage.getCheckoutItemPriceCommonLocator().each(($el, index, $list) => {
            const actText = $el.text()
            var finText = actText.split(" ")
            finText = finText[1].trim()
            sum = Number(sum) + Number(finText)
                //We need to resolve promise so
        }).then(function() {
            cy.log(sum)
        })
        cy.get('h3 > strong').then(function(totalAmount) {
            var total = totalAmount.text().split(" ")
            total = total[1].trim()
            expect(Number(total)).to.equal(sum)
        })



    })

    after(() => {
        // runs once after all tests in the block
        cy.pause() // this will pause the test execution and we can see the result in cypress dashboard
    })
})