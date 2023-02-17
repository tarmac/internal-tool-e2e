import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'
import SignInPage from '../../pages/SignInPage.spec'

Given('I navigate to Tarmac internal tool', () => {
    SignInPage.enterURL()
})

Then('I should see the google sign in button', () => {
    SignInPage.getSignInBtn().should('be.visible')
})