import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2i1n0MAWn3n0eX9oZsoZreT7yaOj0J54",
  authDomain: "visual-degree-f99a8.firebaseapp.com",
  projectId: "visual-degree-f99a8",
  storageBucket: "visual-degree-f99a8.appspot.com",
  messagingSenderId: "412236224408",
  appId: "1:412236224408:web:ab88a6985821fe76627ded",
  measurementId: "G-Z38JNSMNL6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  // return result after user signs in
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
