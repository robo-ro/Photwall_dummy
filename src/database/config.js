
  import * as firebase from 'firebase'

  var config = {
    apiKey: "AIzaSyBILgB71_O5ZaiPj_QzgGTN_PvJV8edIBE",
    authDomain: "photowall-628b5.firebaseapp.com",
    databaseURL: "https://photowall-628b5.firebaseio.com",
    projectId: "photowall-628b5",
    storageBucket: "photowall-628b5.appspot.com",
    messagingSenderId: "1096049551144"
  };
 
  firebase.initializeApp(config)

  const database = firebase.database()

  export {database}