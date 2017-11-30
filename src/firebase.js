import firebase from 'firebase'
require('dotenv').config()

var config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DB_URL,
  storageBucket: process.env.STRG_BUCKET,
  messagingSenderId: process.env.SENDER_ID
};
var firebase = firebase.initializeApp(config);
export default firebase;
