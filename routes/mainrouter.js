const express = require("express");
const router = express.Router();
const path = require("path");
const {
  decodeFirebaseSessionCookie,
  isAuthorized,
} = require("../users/auth_middleware");

// Index - landingPage
router.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "public/website/landingPage", "landing.html")
  );
});

// App - login
router.get("/login", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "public/website/loginPage", "login.html")
  );
});

// App - webapp
router.get("/app", decodeFirebaseSessionCookie, isAuthorized, (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/webapp", "index.html"));
});

module.exports = router;
