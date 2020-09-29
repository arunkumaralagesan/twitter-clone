import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBfXcp_RBjxQzQV9jtslR1X12pJR46rQsI",
  authDomain: "twitter-clone-1f80b.firebaseapp.com",
  databaseURL: "https://twitter-clone-1f80b.firebaseio.com",
  projectId: "twitter-clone-1f80b",
  storageBucket: "twitter-clone-1f80b.appspot.com",
  messagingSenderId: "439326376609",
  appId: "1:439326376609:web:470c5c450321fad35026e0",
  measurementId: "G-GJR6Q985YJ",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
