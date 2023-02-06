describe('Homepage', () => {
  it('Contains intro', () => {
    cy.visit('/')
    cy.contains('h3', 'wouter on the net')
    cy.contains('p', 'Wouter Vernaillen')
  })

  it('Contains 6 links', () => {
    cy.visit('/')
    cy.get('#__nuxt .itemWrapper').should('have.length', 6)

    cy.get('#__nuxt .itemWrapper .item .details a').last().should('have.text', 'Vue AudioMotion Analyzer')
    cy.get('#__nuxt .itemWrapper .item .details .sub').last().should('have.text', 'High-resolution real-time audio spectrum analyzer')
  })

  it('Contains expanded NUXT 3 link with img', () => {
    cy.visit('/')
    cy.get('#__nuxt .itemWrapper .item .details a').first().should('have.text', 'Trance Dance Music')
    cy.get('#__nuxt .itemWrapper .item .details .sub').first().should('have.text', 'Listen to the music of our last trancedance session')

    cy.get('#__nuxt .itemExpandedWrapper').should('have.length', 1)
    cy.get('#__nuxt .itemExpandedWrapper').first().should('be.visible')
    cy.get('#__nuxt .itemExpandedWrapper img').should('have.length', 1)
  })
})
