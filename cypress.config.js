// import { defineConfig } from "cypress";
const { defineConfig } = require("cypress");

import * as mysql from "mysql";

// const mysql = require("mysql");

function queryTestDb(query, config) {
  // creates a new mysql connection using credentials from cypress.json env's
  const connection = mysql.createConnection(config.env.db);
  // start connection to db
  connection.connect();
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error);
      else {
        connection.end();
        // console.log(results)
        return resolve(results);
      }
    });
  });
}

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
      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
      });
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
