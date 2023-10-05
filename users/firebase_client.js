// firebase_client.js
// singInWithGoogle auth interaction

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "firebase/auth";
import client_config from "./config/client_config.js";
import axios from "axios";

// Initialize Firebase
const app = initializeApp(client_config);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

// ------------------------------//
// SignIn                        //
// ------------------------------//
export const signInWithGoogle = () => {
  signInWithRedirect(auth, provider).catch((error) => {
  })
  
  getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    console.log(user);
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  console.log(error);;
};

// ------------------------------//

function validateIDTokenWithServer(idToken) {
  // Send the JWT to the server for validation
  return axios
    .post("http://localhost:3000/api/validate-idtoken", { token: idToken })
    .then((response) => {
      console.log(response.data);
      return response.data.isValid;
    })
    .catch((error) => {
      throw new Error("JWT validation request failed");
    });
}
