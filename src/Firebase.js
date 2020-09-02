import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB67XBSLQb3kpgWCyGnChAH5VkBCw2wkNA",
  authDomain: "redux-app-5992d.firebaseapp.com",
  databaseURL: "https://redux-app-5992d.firebaseio.com",
  projectId: "redux-app-5992d",
  storageBucket: "redux-app-5992d.appspot.com",
  messagingSenderId: "903090520832",
  appId: "1:903090520832:web:c7072e105f3179a75de9e5",
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore();

export default firebase;
