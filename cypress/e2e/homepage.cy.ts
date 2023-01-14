describe('Homepage', () => {
  it('Contains intro', () => {
    cy.visit('/')
    cy.contains('h3', 'wouter on the net')
    cy.contains('p', 'Wouter Vernaillen')
  })

  it('Contains 5 links', () => {
    cy.visit('/')
    cy.get('#__nuxt .itemWrapper').should('have.length', 5)

    cy.get('#__nuxt .itemWrapper .item .details a').last().should('have.text', 'Vue AudioMotion Analyzer')
    cy.get('#__nuxt .itemWrapper .item .details .sub').last().should('have.text', 'High-resolution real-time audio spectrum analyzer')
  })

  it('Contains expanded Trance Dance link with img', () => {
    cy.visit('/')
    cy.get('#__nuxt .itemWrapper .item .details a').first().should('have.text', 'Trance Dance January 23')
    cy.get('#__nuxt .itemWrapper .item .details .sub').first().should('have.text', 'On January 23 we start with the first of a series of monthly Trance Dance sessions at vzw Dwarsligger in Melle')

    cy.get('#__nuxt .itemExpandedWrapper').should('have.length', 1)
    cy.get('#__nuxt .itemExpandedWrapper').first().should('be.visible')
    cy.get('#__nuxt .itemExpandedWrapper img').should('have.length', 1)
  })
})
