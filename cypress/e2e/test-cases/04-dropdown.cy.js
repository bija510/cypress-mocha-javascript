/// <reference types = "cypress" />
/*========================================================================
instead of using List<WebElement> eles= driver.findElements(By.xpath(""))
& Using for loop we can do and perform different action ==BUT in Cypress==>
WE USE:- each(($ddlLabel, index, $list)
========================================================================*/
describe('dropDowns', function() {

    beforeEach('setUp', function() {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/');

    })

    it('static_dropDown', function() {
        //any static dropdown will have select tagName that is HTML Rule
        // cy.get('Select').select('option2').should('have.value', 'option2') //By.value with tagName
        cy.get('#dropdown-class-example').select('Option1').should('have.value', 'option1') // By.label with cssSelector

    })

    it('dynamic_dropdown', function() {
        cy.get("input[id='autocomplete']").type('ind') // each method auto resolve promise
        cy.get(".ui-menu-item div").each(($ddlLabel, index, $list) => {

            if ($ddlLabel.text() == "India") {
                cy.wrap($ddlLabel).click()
            }
        }).then(function() { // handeling promise so it will run after this step otherwise randoamly run 
            cy.get('#autocomplete').should('have.value', 'India')
        })

    })


})