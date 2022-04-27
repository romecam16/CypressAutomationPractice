// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import HomePage from '../support/pages/HomePage';

Cypress.Commands.add('verifyHomePage', () => {
    //Object Creation for Home Page and assigning it to a constant variable
    const homePage=new HomePage();
    //verify the home page
    homePage.getMainLogo().should('be.visible')
    homePage.getShoppingCart().should('be.visible')
    homePage.getContactForm().should('be.visible')
    homePage.getSignIn().should('be.visible')
    homePage.getWomenSection().should('be.visible')
    homePage.getContactForm().click()
})