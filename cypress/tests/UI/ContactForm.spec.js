/// <reference types="Cypress" />

import ContactPage from '../../support/pages/ContactPage';

describe('Test Contact Form',()=> {
    //Object Creation for Contact Page and assigning it to a constant variable
    const contactPage=new ContactPage();

    beforeEach(function(){
        //Get data from fixture to be used in the test cases
        cy.fixture('contact').then((data)=>{
            this.data=data ;
        })
        //Navigate to the base URL defined in cypress.json config file
        cy.visit('/index.php')
        //Use Custom command to verify the home page section before executing the test cases
        cy.verifyHomePage()
    })

    it('Verify that a customer service message can be sent through the contact form', function (){
        //Fill out the contact form fields
        contactPage.getSubjectHeading(this.data.subject[0])
        contactPage.getSubjectHeadingMessage(2).should($el=>{
            expect($el).to.contain(this.data.subjectMessage.customer)
        })
        contactPage.getEmailAddress().type(this.data.email.valid)
        contactPage.getOrderReference().type(this.data.orderReference.text)
        contactPage.getValidMailFormCheck()
        contactPage.getMessageForm().type(this.data.message.valid)
        contactPage.getChooseFileButton().selectFile('cypress/fixtures/QAChallenge.jpg')
        contactPage.getSendButton().click()
        //Verify that the contact message was sent successfully
        contactPage.getAlertSuccess().should($el=>{
            expect($el).to.contain(this.data.alert.success)
        })
    })

    it('Verify that a webmaster service message can be sent through the contact form', function (){
        //Fill out the contact form fields
        contactPage.getSubjectHeading(this.data.subject[1])
        contactPage.getSubjectHeadingMessage(1).should($el=>{
            expect($el).to.contain(this.data.subjectMessage.webmaster)
        })
        contactPage.getEmailAddress().type(this.data.email.valid)
        contactPage.getOrderReference().type(this.data.orderReference.text)
        contactPage.getValidMailFormCheck()
        contactPage.getMessageForm().type(this.data.message.valid)
        contactPage.getChooseFileButton().selectFile('cypress/fixtures/QAChallenge.jpg')
        contactPage.getSendButton().click()
        //Verify that the contact message was sent successfully
        contactPage.getAlertSuccess().should($el=>{
            expect($el).to.contain(this.data.alert.success)
        })
    })

    it('Verify that a webmaster service message cannot be sent without subject mandatory field', function (){
        //Fill out the contact form fields
        contactPage.getEmailAddress().type(this.data.email.valid)
        contactPage.getOrderReference().type(this.data.orderReference.text)
        contactPage.getMessageForm().type(this.data.message.valid)
        contactPage.getChooseFileButton().selectFile('cypress/fixtures/QAChallenge.jpg')
        contactPage.getSendButton().click()
        //Verify that the error message is displayed
        contactPage.getAlertFailure().should($el=>{
            expect($el).to.contain(this.data.alert.failureSubject)
        })
    })

    it('Verify that a customer service message cannot be sent without message mandatory field', function (){
        //Fill out the contact form fields
        contactPage.getSubjectHeading(this.data.subject[0])
        contactPage.getEmailAddress().type(this.data.email.valid)
        contactPage.getOrderReference().type(this.data.orderReference.text)
        contactPage.getChooseFileButton().selectFile('cypress/fixtures/QAChallenge.jpg')
        contactPage.getSendButton().click()
        //Verify that the error message is displayed
        contactPage.getAlertFailure().should($el=>{
            expect($el).to.contain(this.data.alert.failureMessage)
        })
    })

    it('Verify that a webmaster service message cannot be sent without email mandatory field', function (){
        //Fill out the contact form fields
        contactPage.getSubjectHeading(this.data.subject[1])
        contactPage.getOrderReference().type(this.data.orderReference.text)
        contactPage.getMessageForm().type(this.data.message.valid)
        contactPage.getChooseFileButton().selectFile('cypress/fixtures/QAChallenge.jpg')
        contactPage.getSendButton().click()
        //Verify that the error message is displayed
        contactPage.getAlertFailure().should($el=>{
            expect($el).to.contain(this.data.alert.failureMail)
        })
    })

    
    it('Verify that a message cannot be sent through the contact form when an invalid email format is filled out', function (){
        //Fill out the contact form fields
        contactPage.getSubjectHeading(this.data.subject[0])
        contactPage.getEmailAddress().type(this.data.email.invalid)
        contactPage.getOrderReference().type(this.data.orderReference.text)
        contactPage.getInvalidMailFormCheck()
        contactPage.getMessageForm().type(this.data.message.valid)
        contactPage.getChooseFileButton().selectFile('cypress/fixtures/QAChallenge.jpg')
        contactPage.getSendButton().click()
        //Verify that the error message is displayed
        contactPage.getAlertFailure().should($el=>{
            expect($el).to.contain(this.data.alert.failureMail)
        })
    })

    it('Verify that a message can be sent through the contact form without attaching a file', function (){
        //Fill out the contact form fields
        contactPage.getSubjectHeading(this.data.subject[0])
        contactPage.getEmailAddress().type(this.data.email.valid)
        contactPage.getOrderReference().type(this.data.orderReference.text)
        contactPage.getValidMailFormCheck()
        contactPage.getMessageForm().type(this.data.message.valid)
        contactPage.getSendButton().click()
        //Verify that the contact message was sent successfully
        contactPage.getAlertSuccess().should($el=>{
            expect($el).to.contain(this.data.alert.success)
        })
    })
})
