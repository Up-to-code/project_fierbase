import {auth } from "../firebase/firebase_config";
import  { signOut  } from "firebase/auth"
export default function Signout() {
  const Signout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };
  return <button onClick={Signout}>Signout</button>;
}
