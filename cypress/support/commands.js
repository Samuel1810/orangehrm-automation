import LoginPage from '../pages/LoginPage'

const USER = Cypress.env('adminUser');
const PASS = Cypress.env('adminPass');

Cypress.Commands.add('login', (username = USER, password = PASS) => {
  LoginPage.visit();
  LoginPage.isLoaded();
  LoginPage.fillCredentials(username, password);
  LoginPage.submit().click();
  cy.url().should('include', '/dashboard');
  cy.get('.oxd-sidepanel').should('be.visible');
});
