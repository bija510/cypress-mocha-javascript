/// <reference types = "cypress" />

/*=====================================================================================================
1. Cypress by default it auto accept any alert and pop up & only focus in parent Window
2. it doesn't show alert but it log the alert message 
3. Ideally we don't need to worry about the pop up
4. Cypress have the capability of browser events. window:alert is the event which  get fired on alert open
========================================================================================================*/

describe('autoHandleALert', function() {

    beforeEach('setUp', function() {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/');

    })

    it('AutoHandleAlert', function() {

        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        //now we are firing the alert to get access to the
        cy.on('window:alert', (str) => {
            //Moca framework assertion of comparing 2 string
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })


        cy.on('window:confirm', (str) => {
            //Moca framework assertion of comparing 2 string
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

    })



})