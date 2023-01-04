const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // eslint-disable-next-line
    setupNodeEvents(_on, config) {
      // implement node event listeners here
    }
  }
});
