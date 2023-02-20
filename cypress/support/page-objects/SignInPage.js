class SignInPage {
    // elements
    getSignInBtn() {
        return cy.get('#SignInGoogleBtn')
    }

    // methods
    enterURL() {
        cy.visit('https://internal-tool.staplerroja.com')
    }
}

const signInpage = new SignInPage()
export default signInpage