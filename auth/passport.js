var passport = require('passport');
var GoogleStrategy = require('passport-google-oidc');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/google/callback',
    passReqToCallback : true
  },
  async (accessToken, refreshToken, profile, done) => {
    // User profile information from Google is available in the 'profile' parameter
    // You can customize how you handle user information here,
    // whether you choose to find or create a user in your database.
    
    const user = {
        googleID: profile.id,
        displayName: profile.displayName,
        email: profile.emails[0].value // assuming the email will be present in the returned profile
    };

    // 'done' is a function that you call when you’re done setting up the user
    // The first parameter is error, and the second one is the user information
    return done(null, user);
    }
  
));

// This is to handle sessions if you are using them.
// You might adjust the logic based on your database and user management.
passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

module.exports = passport;