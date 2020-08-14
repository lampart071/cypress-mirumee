/// <reference types="cypress" />

context('Window', () => {
  beforeEach(() => {
    cy.visit('https://demo.saleor.io')
  })
  
  it('page contains login icon', () => {
	  cy.get('[data-testid=login-btn]').click();
  })

  it('greets with Sign In', () => {
  })

  it('links to Register', () => {
  })
	
  it('requires email', () => {
  })

  it('requires password', () => {
  })

  it('requires valid username and password', () => {
  })
  
  it('navigates to succesful login', () => {
  })
  
})
