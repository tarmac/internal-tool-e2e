export const isE2ESuite = () => {
    return Cypress.spec.relative.includes('-e2e')
}