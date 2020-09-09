import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBJuUL_zxS1wFaQtwjID66hXBHtSsVFwAs",
  authDomain: "twitter-clone-67446.firebaseapp.com",
  databaseURL: "https://twitter-clone-67446.firebaseio.com",
  projectId: "twitter-clone-67446",
  storageBucket: "twitter-clone-67446.appspot.com",
  messagingSenderId: "653506918768",
  appId: "1:653506918768:web:33bda3659a30858ca577b5",
  measurementId: "G-WB8ZNS9ED7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
