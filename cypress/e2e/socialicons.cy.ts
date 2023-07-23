describe('Social Icons', () => {
  it('Contains 5 Icons', () => {
    cy.visit('/')
    cy.get('.socialIcons').should('have.length', 1)
    cy.get('.socialIcons > a').should('have.length', 5)
  })
})
