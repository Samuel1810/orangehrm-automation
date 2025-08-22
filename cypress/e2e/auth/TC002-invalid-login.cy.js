import LoginPage from '../../pages/LoginPage';

describe('Login Invalid', () => {
    it('should not log in with invalid credentials', () => {
        LoginPage.visit();

        LoginPage.fillCredentials('invalidUser', 'invalidPass');

        LoginPage.submit().click();

        LoginPage.error().should('contain.text', 'Invalid credentials');

        cy.url().should('include', '/auth/login');
        cy.get('input[name="username"]').should('be.visible');
        cy.get('input[name="password"]').should('be.visible');
    });
});