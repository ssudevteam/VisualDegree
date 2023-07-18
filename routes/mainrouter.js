const express = require("express");
const router = express.Router();
const path = require("path");

// Index - landingPage
router.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "public/website/landingPage", "landing.html")
  );
});

// App - webapp
router.get("/app", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/webapp", "index.html"));
});

router.get("/schedules", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/webapp", "index.html"));
});

module.exports = router;
