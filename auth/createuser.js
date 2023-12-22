// CREATE USER
// sends http requests to /graphql endpoint to create a user

// - redundancy in FindUserByGoogleID because createUserWithGoogleID already does a find operation..
// not sure which approach is better design so i have both lol

const axios = require("axios");

// Creates a user if googleID in req.user doesn't exist
async function createUser(user) {
  const { googleID, email, displayName } = user;

  // Construct GraphQL query to find user by googleID
  const findUserQuery = `
      query FindUserByGoogleID($googleID: String!) {
        userByGoogleID(googleID: $googleID) {
          id
          googleID
          displayName
          email
        }
      }
    `;

  // Check if user exists
  let response = await axios({
    method: "post",
    url: "http://localhost:8000/graphql",
    data: {
      query: findUserQuery,
      variables: { googleID: googleID },
    },
  });

  // If user doesn't exist, create a new user using GraphQL mutation
  if (!response.data.data.user) {
    console.log("creating new user");
    const createUserMutation = `
        mutation CreateUserWithGoogleID($googleID: String!, $email: String!, $displayName: String!) {
          createUserWithGoogleID(googleID: $googleID, email: $email, displayName: $displayName) {
            id
            googleID
            displayName
            email
          }
        }
      `;

    // Create a new user
    response = await axios({
      method: "post",
      url: "http://localhost:8000/graphql",
      data: {
        query: createUserMutation,
        variables: {
          googleID: googleID,
          email: email,
          displayName: displayName,
        },
      },
    });
  }

  return user;
}

module.exports = createUser;
