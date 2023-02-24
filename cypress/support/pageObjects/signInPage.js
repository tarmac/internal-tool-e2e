class SignInPage {
    // elements
    getSignInBtn() {
        return cy.get('#SignInGoogleBtn')
    }

    // methods
    enterURL(url) {
        cy.visit(url)
    }
}

const signInpage = new SignInPage()
export default signInpage