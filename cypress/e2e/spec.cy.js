describe('Burrito Builder', () => {
  beforeEach('The user should see the main page', () => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {fixture : 'mockData.json'});
    cy.visit('http://localhost:3000/')
    cy.get('h1').contains('URL Shortener').should('be.visible')
    cy.get('form')
    cy.should('be.visible')
  })

  it('should see existant url on the page load', () => {
    cy.get('h3').contains('Gorgeous image!')
    cy.get('a').contains('http://localhost:3001/useshorturl/1')
  })

  it('Should see name and URL input', () => {
    cy.get('[placeholder="Title..."]').type('name')
    cy.get('[placeholder="URL to Shorten..."]').type('urlToShorten')
  })
  
 

})