it('correctly builds inherit CSS from global js', () => {
  cy.visit('./tests/global/test.html')
  // see /tests/es6/test.cy.js - actual test conditions happen in test.html and just body bg to green if passed.
  cy.get('body').should('have.css', 'background-color', 'rgb(0, 128, 0)')
})
