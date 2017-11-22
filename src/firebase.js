import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyDM1keyF2wqmbcAYSitDIUtvS0t90onlWo",
  authDomain: "synchrono-app.firebaseapp.com",
  databaseURL: "https://synchrono-app.firebaseio.com",
  storageBucket: "synchrono-app.appspot.com",
  messagingSenderId: "373125440394"
};
var firebase = firebase.initializeApp(config);
export default firebase;
