import {auth, googleAcocnt } from "../firebase/firebase_config";
import  { signInWithPopup  } from "firebase/auth"
export default function Google() {
  const signWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAcocnt);
    } catch (err) {
      console.log(err);
    }
  };
  return <button onClick={signWithGoogle}>Google</button>;
}
