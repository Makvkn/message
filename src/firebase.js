// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth"
// import { GoogleAuthProvider } from "firebase/auth"      LATER
import { createUserWithEmailAndPassword } from "firebase/auth"
import  { signInWithEmailAndPassword } from "firebase/auth"

// import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyA1hu9ftz4OuS_2_bXcyugw6C_kLdHXK6U",
    authDomain: "messenger-3faad.firebaseapp.com",
    projectId: "messenger-3faad",
    storageBucket: "messenger-3faad.appspot.com",
    messagingSenderId: "561567186984",
    appId: "1:561567186984:web:0c56d9cc4961c9d435351d"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
// export const provider = new GoogleAuthProvider();       LATER


// export const loginAcc = (auth, email, password) => {
    // const auth = getAuth();
    // signInWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //         // Signed in
    //         const user = userCredential.user;
    //         console.log(user)
    //         // ...
    //     })
    //     .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         console.log(errorCode, errorMessage)
    //     });
// }
