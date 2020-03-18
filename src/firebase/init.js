import firebase from "firebase";
import firestore from "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDxO880nZzK8ZplGrHYqMAihv0h4jGcdjs",
  authDomain: "vue-friends.firebaseapp.com",
  databaseURL: "https://vue-friends.firebaseio.com",
  projectId: "vue-friends",
  storageBucket: "vue-friends.appspot.com",
  messagingSenderId: "105185594990",
  appId: "1:105185594990:web:7641cabb1861cdc82ee07f"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
