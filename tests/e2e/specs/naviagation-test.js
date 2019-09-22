
describe('Naviagation test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.get('.navbar > div.title').contains('Where in the wolrd?')
  })

  it('Search Brasil', () => {
    cy.get('.search > input[type=text]').type('Brasil')
    cy.get('.card').should('have.length', 1)
  })

  it('Select Brasil', () => {
    cy.get('.card').click()
    cy.get('.detailPage > .actions > button').should('have.length', 1)
    cy.get('.fieldName').contains('Brazil')
    cy.get('.borderCountries > button').should('have.length', 10)
  })

  it('Open Border Argentina', ()=>{
    cy.get('.borderCountries > :nth-child(1)').click()
    cy.get('.fieldName').contains('Argentina')
  })

  it('Go to back', ()=>{
    cy.get('.detailPage > .actions > .ripple').click()
    cy.get('.fieldName').contains('Brazil')
  })

  it('Go to home when click title', ()=>{
    cy.get('.title').click()
    cy.get('.card').should('have.length', 250)
  })

  it('Filter by region', ()=>{
    cy.get('.select-selected').click()
    cy.get('.select-items > :nth-child(3)').click()
    cy.get('.card').should('have.length', 50)

  })
})
