class ContactPage {
    getSubjectHeading (option) {
        return cy.get('select').select(option);
    }
    getEmailAddress(){
        return cy.get('#email');
    }
    getOrderReference(){
        return cy.get('#id_order');
    }
    getMessageForm() {
        return cy.get('#message');
    }
    getSendButton() {
        return cy.get('#submitMessage');
    }
    getChooseFileButton() {
        return cy.get('#fileUpload');
    }
    getAlertSuccess() {
        return cy.get('p.alert-success')
    }
    getAlertFailure() {
        return cy.get('[class= "alert alert-danger"]')
    }
    getValidMailFormCheck(){
        return cy.get('[class= "form-group form-ok"]')
    }
    getInvalidMailFormCheck(){
        return cy.get('[class= "form-group form-error"]')
    }
    getSubjectHeadingMessage(option){
        return cy.get(`#desc_contact${option}`)
    }
}

export default ContactPage