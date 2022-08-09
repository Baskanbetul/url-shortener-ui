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
  
  describe('POST requests', () => {
    beforeEach(() => {
      cy.intercept('POST', 'http://localhost:3001/api/v1/orders', { fixture: 'mockData.json' })
        .visit('http://localhost:3000')
      cy.intercept({
        method: 'POST',
        url: 'http://localhost:3001/api/v1/orders'},
        {
          statusCode: 201,
          body: {
            "id": "3",
            "long_url": "https://www.pinterest.com/pin/409405422386885268/",
            "short_url": "http://localhost:3001/useshorturl/1",
            "title": "Husky"
          }
        })
    })
  
    it('should display the new url image when form is submitted', () => {
      cy.get('[placeholder="Title..."]').should('be.visible')
      cy.get('[placeholder="URL to Shorten..."]').should('be.visible')
      cy.get('[placeholder="Title..."]').type('Husky')
      cy.get('[placeholder="URL to Shorten..."]').type('https://www.pinterest.com/pin/409405422386885268/')
      cy.get('button').click()
      cy.get(':nth-child(3) > a').contains('http://localhost:3001/useshorturl/3')
      cy.get(':nth-child(3) > p').contains('https://www.pinterest.com/pin/409405422386885268/')
    })

})