const firebase = require("firebase-admin");
const server_config = require("./config/server_config");
// require("dotenv").config();

module.exports = firebase.initializeApp({
  credential: firebase.credential.cert(server_config),
});
