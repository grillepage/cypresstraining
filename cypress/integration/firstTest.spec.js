/// <reference types="cypress" />

describe('Our first suit', () => {


    it('first test', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //By tag name
        cy.get('input')

        //by ID
        cy.get('#inputEmail1')

        //By Class Name
        cy.get('.input-full-width')

        //By Attribute Name
        cy.get('[placeholder]')

        //By Attribute Name and value
        cy.get('[placeholder="Email"]')

        //By Class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        //By Tag name and Attribute with value
        cy.get('input[placeholder="Email"]')

        //By two different attributes
        cy.get('[placeholder="Email"][fullwidth]')

        //by Tag name, Attribute with value, ID and Class name
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

        //The most recommended way in Cypress
        cy.get('[data-cy="imputEmail1"]')
    })
    
    it.only('second test', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.get('[data-cy="signInButton"]')

        cy.contains('Sign in')

        cy.contains('[status="warning"]', 'Sign in')

        cy.get('#inputEmail3')
        .parents('form')
        .find('button')
        .should('contain', 'Sign in')
        .parents('form')
        .find('nb-checkbox')
        .click()

        cy.contains('nb-card', 'Horizontal form')
        .find('[type="email"]')
    })

})

