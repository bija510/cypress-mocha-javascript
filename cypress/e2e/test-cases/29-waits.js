/// <reference types = "cypress" />

/*==================================================================================================
<=====This 15sec wait is implicit wait will work for all Scripts=====>
1. Now we need to go to cypress.json and add  "defaultCommandTimeout": 15000, this
2. By default timeout is 4sec now we have change to 15Sec & 
3. Make sure by going to cypressDashboard and setting/configuration==> defaultCommandTimeout": 10000 is there
===================================================================================================*/
describe('Waiting', function() {

    it('Waits', function() {
        cy.visit("http://demo.automationtesting.in/Loader.html");
        cy.contains('Run').click()
            // cy.wait(2000) // wait for 2 seconds
            //this take around 15sec so we handle from cypress.json file & work good Explicit wait
            //cypress suggest use timeout soft wait from cypress.json only
            //Cypress.config('defaultCommandTimeout', 15000) Not working but not good approach
        cy.get("button[class='btn btn-default']").click()


    });

});