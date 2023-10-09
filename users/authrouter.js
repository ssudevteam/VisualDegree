// authRouter.js
const express = require('express');
const passport = require('./auth'); // Import the configured passport
const router = express.Router();


// we probably only need the googleID
router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  }
);

module.exports = router;
