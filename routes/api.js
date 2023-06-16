const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  res.send("api goes here");
});

// router.get("/catalog", (req, res) => {
//     graphql endpoint goes here
//   });

//   router.get("/usersAccounts", (req, res) => {
//     mongoose REST api goes here
//   });

//   //userID

//   router.get("/usersFlowState", (req, res) => {
//     mongoose REST api goes here
//   });

//   router.get("/users", (req, res) => {
//     mongoose REST api goes here
//   });

module.exports = router;
