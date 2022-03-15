import firebase from 'firebase/compat/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

//import firebaseConfig from './firebaseConfig'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEX8-YxPppobv15Ztdhro7oOO0lVLOqcU",
  authDomain: "whatsapp-clone-bbc20.firebaseapp.com",
  projectId: "whatsapp-clone-bbc20",
  storageBucket: "whatsapp-clone-bbc20.appspot.com",
  messagingSenderId: "283339019157",
  appId: "1:283339019157:web:9706eade311aabae645c9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default {


  googleLogar: async () => {
    try {
      console.log("to logando")

      const auth = getAuth();

      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(auth, provider)

      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log("usuario")
      console.log(user)
      return user;
      // ...
    } catch (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    }
  }
} 