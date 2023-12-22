// Routing for Main App and Website Domain
const express = require("express");
const router = express.Router();
const path = require("path");
const sessionConfig = require("../auth/config");
router.use(sessionConfig);

const isAuthenticated = require("../auth/middleware");



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
router.get("/app", isAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/webapp", "index.html"));
});

router.get("/schedules", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/webapp", "index.html"));
});

module.exports = router;
