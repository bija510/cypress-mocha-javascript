///<reference types = "cypress"/>

describe.only('test suite 1', function(){

    it.only('test case 1', function(){
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
    })
})
