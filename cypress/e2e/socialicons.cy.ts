describe('Social Icons', () => {
  it('Contains 4 Icons', () => {
    cy.visit('/')
    cy.get('.main > .socialIcons').should('have.length', 1)
    cy.get('.main > .socialIcons > a').should('have.length', 4)
    cy.get('.main > .socialIcons > a > svg').should('have.length', 4)
  })
})
