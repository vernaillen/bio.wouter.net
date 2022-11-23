describe('Social Icons', () => {
  it('Contains 5 Icons', () => {
    cy.visit('/')
    cy.get('#app > header > .wrapper > .socialIcons').should('have.length', 1)
    cy.get('#app > header > .wrapper > .socialIcons > a').should('have.length', 5)
    cy.get('#app > header > .wrapper > .socialIcons > a > svg').should('have.length', 5)
  })
})
