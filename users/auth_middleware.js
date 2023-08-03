// Import Firebase Admin initialized instance to middleware
const firebase = require("firebase-admin");
// import firebase from "firebase";

// TODO - possibly on our mongo db
// const roleRanks = {
//   superAdmin: 1,
//   admin: 2,
//   user: 3,
// };

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

// TODO

// // Checks if a user has the required permission from token claims stored in firebase admin for the user
// module.exports.hasAdminRole = async (req, res, next) => {
//   try {
//     const roleRequest = await firebase.database().ref("roles").once("value");
//     const rolesPayload = roleRequest.val();
//     const role = rolesPayload.find((role) => role.id === roleRanks.admin);

//     if (req.user.roleId <= role.id) {
//       next();
//     } else {
//       return res.status(403).json({
//         error: {
//           message: "You are not permitted to access this resource",
//         },
//       });
//     }
//   } catch (error) {
//     return res.status(500).json({
//       error: {
//         message:
//           "An error occurred while getting user access. Please try again",
//       },
//     });
//   }
// };
