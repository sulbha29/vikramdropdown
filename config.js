import firebase from 'firebase'
require("@firebase/firestore")
var firebaseConfig = {
  apiKey: "AIzaSyDClOZqFkZ--Nce0jUZpoyfYqv0DK4c38w",
  authDomain: "vikramapp.firebaseapp.com",
  databaseURL: "https://vikramapp.firebaseio.com",
  projectId: "vikramapp",
  storageBucket: "vikramapp.appspot.com",
  messagingSenderId: "740295702766",
  appId: "1:740295702766:web:2ab65d9a6d975ba33ddbff"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()