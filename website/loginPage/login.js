import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../server/firebase";

const googleProvider = new GoogleAuthProvider();

const GoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
  } catch (error) {}
};
