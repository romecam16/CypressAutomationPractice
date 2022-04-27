class HomePage {
    getMainLogo () {
        return cy.get('#header_logo img[alt= "My Store"]');
    }
    getContactForm(){
        return cy.get('#contact-link');
    }
    getShoppingCart(){
        return cy.get('a[title="View my shopping cart"]');
    }
    getSignIn(){
        return cy.get('a.login');
    }
    getWomenSection() {
        return cy.get('a[title="Women"]');
    }
}
export default HomePage