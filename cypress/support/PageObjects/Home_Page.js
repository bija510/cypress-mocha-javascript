class HomePage {

    getName_txt() {
        return cy.get("div[class='form-group'] input[name='name']")
    }

    getGender_ddl() {
        return cy.get("#exampleFormControlSelect1")
    }

    getTwoWayBindind_txt() {
        return cy.get(":nth-child(4) > .ng-untouched")
    }
    getEntrepreneur_rad() {
        return cy.get("#inlineRadio3")
    }

    getShop_Btn() {
        return cy.get(':nth-child(2) > .nav-link')
    }
}

export default HomePage; //so that it will available to all file but still need to import in Test class