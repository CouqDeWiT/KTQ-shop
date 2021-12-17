import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAYtPtZRpEFSq3MZ0z5q4-hBjuHrQolJpg",
  authDomain: "shoppingonline-1993e.firebaseapp.com",
  projectId: "shoppingonline-1993e",
  storageBucket: "shoppingonline-1993e.appspot.com",
  messagingSenderId: "727691829420",
  appId: "1:727691829420:web:ded12de868b1434036ff09"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };