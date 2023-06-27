import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider} from "firebase/auth";
import {  getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyANmhd24ylwd5woKwpK7RT3I3SjeIbrB5g",
  authDomain: "ensit-code.firebaseapp.com",
  projectId: "ensit-code",
  storageBucket: "ensit-code.appspot.com",
  messagingSenderId: "334945338556",
  appId: "1:334945338556:web:fd47fa4520d1d920153cb9",
};

const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
 export  const auth = getAuth(app)
 export const googleAcocnt = new GoogleAuthProvider()
 export const data = getFirestore(app)
