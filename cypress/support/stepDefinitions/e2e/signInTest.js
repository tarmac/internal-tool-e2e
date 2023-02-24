import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'
import signInPage from '../../pageObjects/signInPage'

Given('I navigate to Tarmac internal tool', () => {
    signInPage.enterURL(globalUrl)
})

Then('I should see the google sign in button', () => {
    signInPage.getSignInBtn().should('be.visible')
})