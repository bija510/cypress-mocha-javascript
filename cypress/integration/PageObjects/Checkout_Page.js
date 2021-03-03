 class CheckoutPage {

     getCheckout_btn() {
         return cy.get(':nth-child(5) > :nth-child(5) > .btn')
     }

     getDeliveryLocationSearch_txt() {
         return cy.get('#country')
     }

     getDynamicSearchDropdownLabel_ddl() {
         return cy.get('.suggestions  li > a')
     }
     getIAgree_chx() {
         return cy.get('[id="checkbox2"]')
     }
     getPurchase_btn() {
         return cy.get('.ng-untouched > .btn')
     }
     getAlertMsg() {
         return cy.get('.alert')
     }
 }

 export default CheckoutPage;