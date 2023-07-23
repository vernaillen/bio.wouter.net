describe('Homepage', () => {
  it('Contains intro', () => {
    cy.visit('/')
    cy.contains('h3', 'wouter on the net')
    cy.contains('p', 'Wouter Vernaillen')
  })

  it('Contains 5 links', () => {
    cy.visit('/')
    cy.get('div#theLinks > div > button').should('have.length', 5)

    cy.get('div#theLinks > div > button').last().should('have.text', ' Vue AudioMotion Analyzer ')
    cy.get('div#theLinks > div > div').last().should('contain.text', 'High-resolution real-time audio spectrum analyzer')
  })

  it('First link is Nuxt 3', () => {
    cy.visit('/')
    cy.get('div#theLinks > div > button').first().should('contain.text', 'Nuxt 3')
  })
})
