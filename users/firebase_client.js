// firebase_client.js
// singInWithGoogle auth interaction

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import client_config from "./config/client_config.js";
import axios from "axios";

// Initialize Firebase
const app = initializeApp(client_config);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  // <-- Mark the function as async
  try {
    const result = await signInWithPopup(auth, provider);
    const idToken = await result.user.getIdToken();
    await validateIDTokenWithServer(idToken);
    window.location.href = "/app";
  } catch (error) {
    console.log(error);
  }
};

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
