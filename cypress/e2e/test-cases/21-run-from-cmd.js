
/**
* node_modules/.bin/cypress run --spec cypress/e2e/test-cases/21-run-from-cmd.js --env url=https://www.google.com/ --headed
* npx cypress run --spec cypress/e2e/test-cases/21-run-from-cmd.js --env url=https://www.google.com/ --headed
 */

///<reference types = "Cypress" />

describe('RunFromCmd', function() {

    it('runfromCmdCommand', function() {
        cy.visit(Cypress.env('url') + "kkkkh")
    })

})
