const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://blogdoagi.com.br',

    setupNodeEvents(on, config) {

    },
  },

  env: {

  }
});
