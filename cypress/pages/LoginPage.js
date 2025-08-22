class LoginPage {
  visit() {
    cy.visit('/web/index.php/auth/login')
  }
  isLoaded() {
    cy.get('input[name="username"]', { timeout: 10000 }).should('be.visible')
    cy.get('input[name="password"]').should('be.visible')
  }
  username() {
    return cy.get('input[name="username"]')
  }
  password() {
    return cy.get('input[name="password"]')
  }
  submit() {
    return cy.get('button[type="submit"]')
  }
  fillCredentials(user, pass) {
    this.username().type(user)
    this.password().type(pass)
  }
  error() {
    return cy.get('.oxd-alert-content-text')
  }
}
export default new LoginPage()
