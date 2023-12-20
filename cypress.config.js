//import { defineConfig } from "cypress";
const { defineConfig } = require("cypress");
export default defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/results",
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:4200",
    specPattern: "cypress/e2e/**/*.spec.{js,jsx,ts,tsx}",
  },
  screenshotOnRunFailure: true, // default true
  video: true, // default false
  viewportHeight: 2000, // default 660
  viewportWidth: 2000, // default 1200
  // retries: 1,
  defaultCommandTimeout: 5000, // default 4000
  requestTimeout: 10000, // default 5000
  responseTimeout: 30000, // default 30000
  // watchForFileChanges: false,

  env: {
    POST: "4200",
    WORK_ENV: "dev",
    password: "qwerty",
  },
});
