import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCemnZbI7sywWLguFg-dK5xXcA2WtlVda8",
  authDomain: "vue-firebase-1e097.firebaseapp.com",
  projectId: "vue-firebase-1e097",
  storageBucket: "vue-firebase-1e097.appspot.com",
  messagingSenderId: "1075145274622",
  appId: "1:1075145274622:web:26e57e55602be0cfd8e1af",
};

// init app
firebase.initializeApp(firebaseConfig);

// init firestore
const pjFirestore = firebase.firestore();

//firebase auth
const pjAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { pjFirestore, timestamp, pjAuth };
