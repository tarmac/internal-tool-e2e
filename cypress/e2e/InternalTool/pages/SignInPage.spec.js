class SignInPage {
    enterURL() {
        cy.visit('https://internal-tool.staplerroja.com')
    }
    getSignInBtn() {
        return cy.get('[id="SignInGoogleBtn"]')
    }
}

const signInpage = new SignInPage()
export default signInpage