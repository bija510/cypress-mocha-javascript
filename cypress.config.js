const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 20000,
  pageLoadTimeout: 30000,
  experimentalStudio: true,
  reporter: 'mochawesome',
  env: {
    url: 'https://qaclickacademy.github.io',
  },
  retries: {
    runMode: 1,
  },
  projectId: 'w4cmd4',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
