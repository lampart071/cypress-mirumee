/// <reference types="cypress" />

context('Window', () => {
  beforeEach(() => {
    cy.visit('https://demo.saleor.io')
    cy.loginwindow()
  })
  
  it('home page contains login icon', () => {
    cy.get('[data-testid=login-btn]')
    .should('be.visible')
  })

  it('login window has elements', () => {
    cy.get('.overlay__header-text').should('have.text', 'Saleor account')
    cy.get('.active-tab').should('have.text', 'Sign in to account')
    cy.get('.login__tabs > span:nth-of-type(2)').should('have.text', 'Register new account')
    cy.get('.button  ').should('have.text', 'Sign in')
    cy.get('.login__content__password-reminder > p').should(($p) => {
    expect($p).to.have.length(1)
    expect($p.first()).to.contain('Have you forgotten your password?')
    expect($p.addClass('.u-link')).to.contain('Click Here')
    // use jquery's map to grab all of their classes
    // jquery's map returns a new jquery object
    // const classes = $p.map((i, el) => {
    //   return Cypress.$(el).attr('class')
    // })
    // call classes.get() to make this a plain array
    // expect(classes.get()).to.deep.equals('.u-link').debug()
    })
  })

  it('email is visible and has value', () => {
    cy.get('input[name="email"]')
    .should('be.visible')
    .should('have.value', 'admin@example.com')
  })

  it('password is visible and has value', () => {
    cy.get('input[name="password"]')
    .should('be.visible')
    .should('have.attr', 'type', 'password')
    .should('have.value', 'admin')
  })

  // it('links to Register', () => {
  // })
	
  // it('requires email', () => {
  // })

  // it('requires password', () => {
  // })

  // it('requires valid username and password', () => {
  // })
  
  // it('navigates to succesful login', () => {
  // })
  
})
