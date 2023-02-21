import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'
import SignInPage from '../../pageObjects/SignInPage'

Given('I navigate to Tarmac internal tool', () => {
    SignInPage.enterURL(globalUrl)
})

Then('I should see the google sign in button', () => {
    SignInPage.getSignInBtn().should('be.visible')
})