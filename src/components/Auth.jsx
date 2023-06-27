import { useState } from "react";
import { auth } from "../firebase/firebase_config";
import {createUserWithEmailAndPassword  } from "firebase/auth"

export default function Auth() {

 console.log(auth?.currentUser?.photoURL)

const [email,setemail] = useState("")
 const [password,setpassword] = useState("")

const sign = async () => {
  try {
      await createUserWithEmailAndPassword(auth , email , password)
  } catch (err) {
    console.log(err)
  }
}
 
  return (
    <div>
      <label htmlFor="">Email</label>
      <input type="email" onChange={(e)=> setemail(e.target.value)}/>
      <label htmlFor="">Password</label>
      <input type="password"  onChange={(e)=> setpassword(e.target.value)}/>
      <br />
      <br />
      <button onClick={sign}>sign</button>
    </div>
  );
}
