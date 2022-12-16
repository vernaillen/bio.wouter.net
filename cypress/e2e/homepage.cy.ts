describe('Homepage', () => {
  it('Contains intro', () => {
    cy.visit('/')
    cy.contains('h3', 'wouter on the net')
    cy.contains('p', 'Wouter Vernaillen')
  })

  it('Contains 5 links', () => {
    cy.visit('/')
    cy.get('#__nuxt .itemWrapper').should('have.length', 5)

    cy.get('#__nuxt .itemWrapper .item .details a').last().should('have.text', 'Meditative melody')
    cy.get('#__nuxt .itemWrapper .item .details .sub').last().should('have.text', 'Live jam on the Subharmonicon')
  })

  it('Contains Release Your Inner Dancer link', () => {
    cy.visit('/')
    cy.get('#__nuxt .itemWrapper .item .details a').first().should('have.text', 'Release Your Inner Dancer')
    cy.get('#__nuxt .itemWrapper .item .details .sub').first().should('have.text', 'Ecstatic Dance dj-set recorded on 3 September 2022 in Haaltert')
  })

  it('Contains Meditative melody link', () => {
    cy.visit('/')

    cy.get('#__nuxt .itemWrapper .item .details a').last().should('have.text', 'Meditative melody')
    cy.get('#__nuxt .itemWrapper .item .details .sub').last().should('have.text', 'Live jam on the Subharmonicon')
  })
})
