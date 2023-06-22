import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBi2qK40PdaRGVDoenRoJNqDOR7u9ryjws",
  authDomain: "visual-degree.firebaseapp.com",
  projectId: "visual-degree",
  storageBucket: "visual-degree.appspot.com",
  messagingSenderId: "230261036162",
  appId: "1:230261036162:web:dc118ebe11d58447abd09b",
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
