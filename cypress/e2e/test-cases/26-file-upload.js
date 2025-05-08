/** 
 * Doc:-https://github.com/abramenal/cypress-file-upload
 1. run this command from terminal:- npm install --save-dev cypress-file-upload
 2. add this ((import 'cypress-file-upload';)) inside cypress/support/commands.js like this:
 3. Make sure import './commands'; is not commented inside the index.js ==>All set now! 💥
 4. make sure we have type="file" in html dom
 */
/// <reference types="cypress"/>

describe('FileUpload', () => {

    it('fileUploadSpec', () => {
        cy.visit("http://demo.automationtesting.in/FileUpload.html")
        const imageFilePath = 'forupload.jpg'
        cy.get("input#input-4").attachFile(imageFilePath)

    })
})