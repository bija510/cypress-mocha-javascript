const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 20000,
  pageLoadTimeout: 30000,
  experimentalStudio: true,
  reporter: 'mochawesome',
  video: true, // ✅ Enable video recording
  videoCompression: 32, // optional: compress video (0 disables compression)
  "reporterOptions": {
    "reportDir": "cypress/reports",
    "overwrite": false,
    "html": false,
    "json": true
  },
  env: {
    url: 'https://qaclickacademy.github.io',
    grepFilterSpecs: true // Enable filtering specs based on grep
  },
  retries: {
    runMode: 1,
  },
  projectId: 'w4cmd4',
e2e: {
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
   
    setupNodeEvents(on, config) {
       require('@cypress/grep/src/plugin')(config)
      // Load custom plugin and return config (in case it's modified)
      const maybeModified = require('./cypress/plugins/index.js')(on, config);
      return maybeModified || config;
    },
  },
})
