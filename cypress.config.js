const { defineConfig } = require("cypress");
// import {defineConfig} from "cypress";
// import * as mysql from "mysql";
// const mysql = require("mysql");

module.exports = defineConfig({
  // функція для роботи з "mysql"
  // function queryTestDb(query, config) {
  //   // creates a new mysql connection using credentials from cypress.json env's
  //   const connection = mysql.createConnection(config.env.db);
  //   // start connection to db
  //   connection.connect();
  //   // exec query + disconnect to db as a Promise
  //   return new Promise((resolve, reject) => {
  //     connection.query(query, (error, results) => {
  //       if (error) reject(error);
  //       else {
  //         connection.end();
  //         // console.log(results)
  //         return resolve(results);
  //       }
  //     });
  //   });
  // }

  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        queryDb: (query) => {
          return queryTestDb(query, config);
        },
        log(message) {
          console.log(message);
          return null;
        },
      });
    },
    baseUrl: "https://qauto.forstudy.space",
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
