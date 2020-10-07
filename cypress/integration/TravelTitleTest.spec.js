/// <reference types="cypress" />

describe('Проверка соответствия title страницы', () => {

    it('Проверка title главной страницы', () => {
        cy.visit('https://travelask.ru/')
        cy.get('title')

    })


})