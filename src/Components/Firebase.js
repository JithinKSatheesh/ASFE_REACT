import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCPnC9k8vMGC1PcVfCvBfXmVJaWCD93AlI",
    authDomain: "asfe-2020.firebaseapp.com",
    databaseURL: "https://asfe-2020.firebaseio.com",
    projectId: "asfe-2020",
    storageBucket: "asfe-2020.appspot.com",
    messagingSenderId: "900171937490",
    appId: "1:900171937490:web:a6a6957ad0d65d8df09f0b",
    measurementId: "G-NYPL1DD5S3"
  };

firebase.initializeApp(firebaseConfig)

export default firebase