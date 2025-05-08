/// <reference types = "cypress" />

/*=====================================================================================================
1. Cypress don't have frame support in begnning but now they support
2. Frame means we are embedding html document inside html document.
3. We need this plugin terminal==> npm install -D cypress-iframe
========================================================================================================*/
import 'cypress-iframe'
describe('Frames', function() {

    beforeEach('setUp', function() {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/');

    })

    it('switchToFrame', function() {
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find("a[href*='mentorship']").eq(0).click() // Need to always give cy.iframe(). after frame is loaded



    })



})