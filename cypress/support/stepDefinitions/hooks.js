const { isE2ESuite } = require('../helpers/e2e/commonHelpersE2E')

before(() => {
    globalThis.globalUrl = Cypress.env('INTERNAL_TOOL_URL')
})

beforeEach(() => {
    if (isE2ESuite()) {
        Cypress.config('screenshotOnRunFailure', true)
    }
})