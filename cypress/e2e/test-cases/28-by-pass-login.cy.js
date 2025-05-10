/*************************************************************
 * Window authentication pop up Working exactly as in Selenium
 **************************************************************/

/// <reference types="cypress"/>

describe('zTemp', () => {

    it('testSpec', () => {

        cy.visit("http://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.wait(2000)
        cy.get("a[target='_blank']").click()
            /*================================================================
            From Yuutube
                    cy.request({
                        url: "http://the-internet.herokuapp.com/basic_auth",
                        method: 'POST',
                        body: {
                            user: { email: "admin", password: "admin" }
                        }

                }).its('body').then(res => localStorage.setItem('jwt', res.user.token))

                cy.visit('/')
            ================================================================*/
    })
})