import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBU7KpYg7ia5ewbm0w4Jl9lCdsRtnN6FH0",
    authDomain: "facebook-messenger-clone-c61d4.firebaseapp.com",
    projectId: "facebook-messenger-clone-c61d4",
    storageBucket: "facebook-messenger-clone-c61d4.appspot.com",
    messagingSenderId: "1073468667545",
    appId: "1:1073468667545:web:97105fe313f601c2642a08",
    measurementId: "G-7C7PV0V3VJ"
});

const db = firebaseApp.firestore();

export default db;