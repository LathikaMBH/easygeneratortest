const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.env.URL = process.env.URL;
      return config;
    },


    specPattern: 'cypress/integration/e2e/*.ts'
  },
});
