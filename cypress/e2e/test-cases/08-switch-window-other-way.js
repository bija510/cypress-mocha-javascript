/// <reference types = "cypress" />

/*********************************************************************************************************
1. Cypress don't have method to getAttribute so we use JQuery then()=> Neeed to Resolve promise 
2. Cypress don't support change the url(Main Doman) 
   ie:-from like https:www.facebook.com  to https://www.amazon.com in one TC
*********************************************************************************************************/

describe('SwitchWindow', function() {

    beforeEach('setUp', function() {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/');
    })

    //=============THIS IS NOT TEST CASE BUT DEMONSTRATION OF FAIL TEST CASE======================
    it('switchWindowUsinghrefAttribute', function() {
        cy.get('#opentab').then(function(el) {
            var url = el.prop('href')
            cy.log(url)
            cy.visit(url) // ISSUE is when we change whole domain(url) then cypress will not work some security issue.

        })
    })
})