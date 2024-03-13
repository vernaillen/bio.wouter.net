import { useLinks } from '../../composables/useLinks'

describe('Homepage', () => {
  it('Contains intro', () => {
    cy.visit('/en')
    cy.contains('h3', 'wouter on the net')
    cy.contains('div', 'Wouter Vernaillen')
  })

  it('Contains correct number of links', () => {
    cy.visit('/en')
    cy.get('div#theLinks > div > div > div > button').should('have.length', useLinks('en').length)
  })

  it('First & last link contain correct label', () => {
    cy.visit('/en')

    const firstLink = useLinks('en')[0]
    cy.get('div#theLinks > div > div > div > button').first().should('contain.text', firstLink.label)

    const lastLink = useLinks('en')[useLinks('en').length - 1]
    cy.get('div#theLinks > div > div > div > button').last().should('contain.text', lastLink.label)
  })
})
