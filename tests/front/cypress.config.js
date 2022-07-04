const { defineConfig } = require('cypress')

module.exports = defineConfig({
  fixturesFolder: false,
  viewportWidth: 300,
  viewportHeight: 300,
  e2e: {
    specPattern: "./tests/**/*.cy.js",
    supportFile: false,
    setupNodeEvents(on, config) {
      on('task', {
        log (message) {
          console.log(message)
          return null
        }
      })
    }
  }
})
