Cypress.Commands.add("login", (email, password) => {});

Cypress.Commands.add("loginpage", (email, password) => {
  cy.visit("https://demo.saleor.io");
  cy.get("[data-testid=login-btn]").click();
});

Cypress.Commands.add("resetpage", (email, password) => {
  cy.visit("https://demo.saleor.io");
  cy.get("[data-testid=login-btn]").click();
});

// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
