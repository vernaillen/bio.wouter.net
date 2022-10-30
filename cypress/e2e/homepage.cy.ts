describe('Homepage', () => {
  it('Contains intro', () => {
    cy.visit('/')
    cy.contains('h3', 'wouter on the net')
    cy.contains('h4', 'Wouter Vernaillen')
  })

  it('Contains 5 links', () => {
    cy.visit('/')
    cy.get('main .itemWrapper').should('have.length', 5)

    cy.get('main .itemWrapper .item .details a').last().should('have.text', ' Meditative melody ')
    cy.get('main .itemWrapper .item .details .sub').last().should('have.text', ' Live jam on the Subharmonicon ')
  })

  it('Contains Release Your Inner Dancer link', () => {
    cy.visit('/')
    cy.get('main .itemWrapper .item .details a').first().should('have.text', ' Release Your Inner Dancer ')
    cy.get('main .itemWrapper .item .details .sub').first().should('have.text', ' Ecstatic Dance dj-set recorded on 3 September 2022 in Haaltert ')
  })

  it('Contains Meditative melody link', () => {
    cy.visit('/')

    cy.get('main .itemWrapper .item .details a').last().should('have.text', ' Meditative melody ')
    cy.get('main .itemWrapper .item .details .sub').last().should('have.text', ' Live jam on the Subharmonicon ')
  })
})
