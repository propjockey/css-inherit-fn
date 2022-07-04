
it('compiled css sets --hue correctly / it works', () => {
  cy.visit('./tests/front/hue.test.html')
  cy.get('body').should('have.css', 'background-color', 'rgb(0, 128, 0)')
})

it('compiled css sets --depth correctly / it works', () => {
  cy.visit('./tests/front/depth.test.html')
  cy.get('body').should('have.css', 'background-color', 'rgb(0, 128, 0)')
})

it('compiled css sets --sticky correctly / it works', () => {
  cy.visit('./tests/front/sticky.test.html')
  cy.get('body').should('have.css', 'background-color', 'rgb(0, 128, 0)')
})
