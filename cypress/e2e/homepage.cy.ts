import { useLinks } from '../../composables/useLinks'

describe('Homepage', () => {
  it('Contains intro', () => {
    cy.visit('/')
    cy.contains('h3', 'wouter on the net')
    cy.contains('div', 'Wouter Vernaillen')
  })

  it('Contains correct number of links', () => {
    cy.visit('/')
    cy.get('div#theLinks > div > div > button').should('have.length', useLinks().length)
  })

  it('First & last link contain correct label', () => {
    cy.visit('/')

    const firstLink = useLinks()[0]
    cy.get('div#theLinks > div > div > button').first().should('have.text', ' ' + firstLink.label + ' ')

    const lastLink = useLinks()[useLinks().length - 1]
    cy.get('div#theLinks > div > div > button').last().should('have.text', ' ' + lastLink.label + ' ')
  })
})
