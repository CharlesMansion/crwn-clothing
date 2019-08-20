import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyApzfy9iSmGz9z3laxPGJ-LdVgr4uU4YRA",
    authDomain: "crwn-clothing-base.firebaseapp.com",
    databaseURL: "https://crwn-clothing-base.firebaseio.com",
    projectId: "crwn-clothing-base",
    storageBucket: "",
    messagingSenderId: "826697301334",
    appId: "1:826697301334:web:a08251367a5af07d"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;