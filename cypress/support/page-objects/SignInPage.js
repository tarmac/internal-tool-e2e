class SignInPage {
    // objects
    getSignInBtn() {
        return cy.get('[id="SignInGoogleBtn"]')
    }

    // methods
    enterURL() {
        cy.visit('https://internal-tool.staplerroja.com')
    }
}

const signInpage = new SignInPage()
export default signInpage