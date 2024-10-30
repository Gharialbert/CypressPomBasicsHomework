class LoginPage {
    elements = {
        login: '#login2',
        usernameField: '#loginusername',
        passwordField: '#loginpassword',
        loginButton: '#logInModal .btn-primary',
        welcomeUsername: '#nameofuser',
        loginRelatedOption: '#logout2',
        loginRelatedOptionCart: '#cartur'
    }

    openSite() {
        cy.visit('https://demoblaze.com/')
    }

    openLoginForm() {
        cy.get(this.elements.login).click()
        cy.wait(2000)
    }

    login(username, password) {
        cy.get(this.elements.usernameField).type(username)
        cy.get(this.elements.passwordField).type(password)
        cy.get(this.elements.loginButton).click()
    }

    assertWelcomeMessage(username) {
        cy.get(this.elements.welcomeUsername).should('have.text', `Welcome ${username}`);
    }

    assertLoginOptionVisible() {
        cy.get(this.elements.loginRelatedOption).should('be.visible')
        cy.get(this.elements.loginRelatedOptionCart).should('be.visible')
    }

    typeText(selector, text) {
        cy.get(selector).type(text)
    }
}

export default LoginPage
