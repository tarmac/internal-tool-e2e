const { isE2ESuite } = require('../helpers/e2e/common-helpers-e2e')

beforeEach(() => {
    if (isE2ESuite()) {
        Cypress.config('screenshotOnRunFailure', true)
    }
})