// authRouter.js
const express = require("express");
const passport = require("./passport"); // Import the configured passport
const createuser = require("./createuser");
// const sessionConfig = require("./config");
const router = express.Router();

// router.use(sessionConfig); // attach session manager middleware

// 1. Passport temporarily stores auth object in req.user
router.get(
  "/google",
  passport.authenticate("google", { scope: ["openid","profile", "email"] })
);

// 2. Then, calls back to this URI
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
  }),
  async function (req, res) {
    try {

      const user = await createuser(req.user);

      req.session.userData = user; // 1. stores session user on server
      
      // Serialize user object into a JSON string
      // const userString = JSON.stringify(req.user.googleID);
        
      // Encode the user string as a URI component and append it as a query parameter
      console.log(req.session.userData);
      res.redirect(`/app`);
    } catch (error) {
      // re-direction on error
      console.error("Error:", error);
      res.redirect("/");
    }
  }
);



module.exports = router;
