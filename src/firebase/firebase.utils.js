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

//take the google authenticated user object and save his details in firestore db
export const createUserProfileDocument = async (userAuth, additionalData) => {
  //if google sign in is not succesful we wil get null and new user will not be added to db
  if (!userAuth) {
    return;
  } else {
    //enter else block if google authentication is succesfull
    //already "user" collection is created in db via firestore console
    //checking if the user is already present in db or not
    let userRef = firestore.doc(`users/${userAuth.uid}`);
    //snapshot will have an exists value true/false
    let snapShot = await userRef.get();
    if (!snapShot.exists) {
      //if user does not an already existing user -> user data does not exists in db ->add it in db
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData,
        });
      } catch (error) {
        console.warn("Error creating user ", error);
      }
    }
    return userRef;
  }
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
