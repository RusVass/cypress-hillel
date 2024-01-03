//import {defineConfig} from "cypress";
const {defineConfig} = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/results",
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message)
          return null
        },
      })
      //=====режим incognito======
      on('before:browser:launch', (browser, launchOptions) => {
            if(browser.name ==="chrome"){
              launchOptions.args.push("--incognito")
            }
            return launchOptions
          })
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
  experimentalWebKitSupport: true,

  env: {
    POST: "4200",
    WORK_ENV: "staging",
  },
});
