/// <reference types = "cypress" />

/***********************************************************************************
 NOTE:- We can traverse to sibling with next() & it work only  on get()
*************************************************************************************/

describe('WebTableFunction', function() {

    beforeEach('setUp', function() {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/');

    })

    it('getAnytableTdTest', function() {

        cy.get('table#product tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text() // or we can declae voariable using var also
            if (text.includes("WebServices")) {
                cy.get('table#product tr td:nth-child(2)').eq(index).next().then(function(price) {
                        const priceText = price.text()
                        expect(priceText).to.equal('35')
                    }) //move to sibling from desired element
            }
        })

    })

})