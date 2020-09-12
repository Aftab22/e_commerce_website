import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//config from firebase project detail

const config = {
  apiKey: "AIzaSyAWuRjDAGX8-s54zTOnyXgRjv8JsR1WUUI",
  authDomain: "aftab-shopping.firebaseapp.com",
  databaseURL: "https://aftab-shopping.firebaseio.com",
  projectId: "aftab-shopping",
  storageBucket: "aftab-shopping.appspot.com",
  messagingSenderId: "751455253710",
  appId: "1:751455253710:web:bf51bf159cd84c3f264c9f",
  measurementId: "G-SF0EFZGCRK",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//google auth setup
const provider = new firebase.auth.GoogleAuthProvider();
//set custom param to prompt user to select google account
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
