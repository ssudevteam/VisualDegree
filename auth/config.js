// config.js
const env = require("dotenv").config({ path: "../.env" });

// can be included in other routers with const sessionConfig = require('./config')

/*express-session is a middleware module in Express. 
It stores session data on the server side, using a variety of different storage options, 
and allows you to track the activity of a user across requests.
 */

// session
const session = require("express-session");

const sessionConfig = session({
  secret: process.env.EXPRESS_SESSION_SECRET, // Ensures cookie hasn't been tampered with
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }, // Make sure to set this to true in a production environment
});

module.exports = sessionConfig;
