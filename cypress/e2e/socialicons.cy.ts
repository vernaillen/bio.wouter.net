describe('Social Icons', () => {
  it('Contains 5 Icons', () => {
    cy.visit('/')
    cy.get('#__nuxt > header > .wrapper > .socialIcons').should('have.length', 1)
    cy.get('#__nuxt > header > .wrapper > .socialIcons > a').should('have.length', 5)
    cy.get('#__nuxt > header > .wrapper > .socialIcons > a > svg').should('have.length', 5)
  })
})
