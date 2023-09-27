// Import Firebase Admin initialized instance to middleware
const firebase = require("firebase-admin");
const fetch = require('node-fetch');

// Checks if a user is authenticated from firebase admin
module.exports.isAuthorized = async (req, res, next) => {
  if (req.user) {
    next();
  } else {
    console.log("user not logged in, redirecting...");
    res.redirect("/login");
  }
};

// decodeFirebaseSessionCookie
module.exports.decodeFirebaseSessionCookie = (req, res, next) => {
  if (!req.cookies.session) {
    return res.redirect("/login");
  }

  const sessionCookie = req.cookies.session || "";
  firebase
    .auth()
    .verifySessionCookie(sessionCookie, true)
    .then((decodedClaims) => {
      req.user = decodedClaims;
      // console.log(req.user);
      next();
    })
    .catch((error) => {
      console.log(
        "Session cookie is unavailable or invalid. Force user to login."
      );
      return res.redirect("/login");
    });
};

module.exports.fetchAccount = async (req, res, next) => {
  if (req.account && req.account.firebaseID) {
      // Fetch user data from your app's database using the Firebase ID
      const user = await fetchUserData(req.account.firebaseID);

      // If user data found in your app's database, attach it to req.user
      if (user) {
          req.user = user;
          next();
      } else {
          console.log("User data not found in our app's database. Taking appropriate action...");
          // Decide on how you want to handle this scenario. You might want to:
          // 1. Redirect to /app/welcome
          // 2. Log the user out and ask them to re-login.
          // 3. Or any other action that fits your application's needs.
          res.redirect("/some-appropriate-endpoint");
      }
  } else {
      console.log("User not logged in, redirecting...");
      res.redirect("/login");
  }
};

// Implementation of User Lookup
async function fetchUserData(firebaseID) {
  const query = `
      query GetUserByFirebaseID($firebaseID: String!) {
          user(where: { firebaseID: $firebaseID }) {
              id
              name
              // ... other fields you might want
          }
      }
  `;

  const response = await fetch('http://localhost:3000/graphql', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          query: query,
          variables: { firebaseID: firebaseID }
      })
  });

  const { data } = await response.json();
  return data.user;
}