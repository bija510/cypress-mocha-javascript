/*===================================================================================================================
1. node_modules\.bin\cypress run (will run whole folder with all test cases)
2. run 1 specefic Spec file--> 
=1=====> node_modules\.bin\cypress run --spec cypress/integration/TestCases/Cy_21_RunFromCMD.js --env url=https://www.google.com/ --headed
=0r 2==>npx cypress run --spec cypress/integration/TestCases/Cy_21_RunFromCMD.js --env url=https://www.google.com/ --headed
<====================But we have to run in Terminal to get screenshot and video=======================>
3. This automatically capture screenshot &  on Failure & autoCreate screenshot folder & put inside it
4. This automatically give a Video also inside video folder
5. Put PageObjects folder inside support folder because if we put inside integration folder when we run all it will blindly run all the time

or We can Just go to make script command in package.json
THis is autocreated & just example testall or we can create smoke , regression...
 "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "testall": "npx cypress run --spec cypress/integration/TestCases/Cy_21_RunFromCMD.js --env url=https://www.google.com/ --headed"
    }
    Then from terminal ===> npm run testall
=====================================================================================================================*/

///<reference types = "Cypress" />

describe('RunFromCmd', function() {

    it('runfromCmdCommand', function() {
        cy.visit(Cypress.env('url') + "kkkkh")
    })

})