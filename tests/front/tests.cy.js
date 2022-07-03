it('changes background color', () => {
  // when the app starts, the background is black
  cy.visit('./tests/front/tests.html')
  // tip: add additional matchers like "chai-colors"
  // to express desired colors better
  // see recipe "Extending Cypress Chai Assertions"
  cy.get('body').should('have.css', 'background-color', 'rgb(0, 0, 0)')

  // select the new color value in the <input type="color">
  // element and trigger "change" event
  // cy.get('input[type=color]')
  // .invoke('val', '#ff0000')
  // .trigger('change')

  // // check the background color has been changed
  // cy.get('body').should('have.css', 'background-color', 'rgb(255, 0, 0)')
})
