it('correctly builds inherit CSS from ES6 module', () => {
  cy.visit('./tests/es6/test.html')
  // cy.get('style#built-result').should($style => {
  //   // cy.task('log', $style[0].innerHTML)
  //   const built = $style[0].innerHTML
  //   return cy.get('style#expected-css').should($css => {
  //     // cy.task('log', $css[0].innerHTML)
  //     const css = $css[0].innerHTML
  //     assert.equal(built, css, "They match")
  //     assert.equal(Math.min(10000, css.length), 10000, "They have content")
  //     // after all the debugging of cryptic cypress failures to get this far, let's
  //     // be mindful of confirmation bias just because it passed... ~ sanity check ~
  //     assert.equal(false, true, "Please fail") // it doesn't :)
  //     expect(false).to.be(true) // Please fail // it doesn't :)
  //   })
  // })
  // Cypress documentation is a dumpster of legos, k'nex, erector set, and gd capsela that may
  // or may not all have some way to work together and I don't have time to sort out the mess.
  // So the body background is only green if manual tests passed from inside test.html itself.
  cy.get('body').should('have.css', 'background-color', 'rgb(0, 128, 0)') // whatapainintheass
})
