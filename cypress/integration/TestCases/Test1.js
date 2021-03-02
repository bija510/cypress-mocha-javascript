/**************************************************************************************************
1a. 1st way To open Cypress Dashboard : run in Terminal ----> node_modules\.bin\cypress open
1b. 2nd way To open Cypress Dashboard : run in Terminal ----> npx cypress open
2. This is a moca framework ["describe" and "it" ] and it come by default with Cypress Download
3. For auto-suggestion write this "/// <reference types="Cypress" />"  on top of the Script
4. Cypress Auto download Electron browser by default & is 99% same as Chrome and most Stable 
5. When you run cypress through CMD it always Run Headless
6. URL for more info---> https://docs.cypress.io/guides/guides/command-line.html#Installation
7. Fixtures------------> put all the input Datas
8. Integration --------> we Write test cases inside it. no need to write inside example Folder
9. Plugins ------------> are kinds of Listeners 
10.Supports------------> write Reusable Method like Library or Utilites
11.Video -------------->
12. Cypress.json
13. .exe time wait--6 sec and by default it will wait for 4sec but can be customizable
14. Screenshot also by default and we can customize also
15. Package.JSON = PoM.XML
16 for Intelligent Code Completion. ---> /// <reference types="Cypress" />
****************************************************************************************************/
/// <reference types="Cypress" />
describe('first Test Suite', function() {

    it('first Test case', function() {

        cy.visit('https://example.cypress.io/commands/actions')
    })

})