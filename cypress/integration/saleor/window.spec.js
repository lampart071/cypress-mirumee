/// <reference types="cypress" />

context('Window', () => {
  beforeEach(() => {
    cy.visit('https://demo.saleor.io')
  })

  it('Global window object should have "top"', () => {
    cy.window().should('have.property', 'top')
  })

  it('Document object should be equal to "UTF-8"', () => {
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
  })

  it('Title of Home Page should be equal to "Demo PWA Storefront – Saleor Commerce"', () => {
    cy.title().should('eq', 'Demo PWA Storefront – Saleor Commerce')
  })
})
