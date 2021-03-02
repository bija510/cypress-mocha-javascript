/// <reference types = "Cypress" />

describe('first_Suite', function() {

    it('fsirst_Method', function() {

        //====================Opening any URL get() ==============
        cy.visit("http://demo.automationtesting.in/Register.html");

        //====================Direct SendKeys()===================
        cy.get(':nth-child(1) > :nth-child(2) > .form-control').type('David');

        //====================WebElement SendKeys()===============
        cy.get(':nth-child(1) > :nth-child(3) > .form-control').as('lastName_txt')
        cy.get('@lastName_txt').type('Johnson');

        //====================WebElement Click=====================
        cy.get(':nth-child(1) > .ng-pristine').as('male_rad');
        cy.get('@male_rad').click();

        //====================Select label DDL=====================
        cy.get('#Skills').as('skills_ddl');
        cy.get('@skills_ddl').select('CSS');

        //====================Check CheckBox========================
        cy.get('#checkbox2').as('movies_chk');
        cy.get('@movies_chk').click();
        cy.get('@movies_chk').check();


    });

});