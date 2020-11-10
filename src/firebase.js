import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB1XeEbvkpA1SkkZ5ZavAoqhfXNpozMlbo",
    authDomain: "discord-clone-9a7af.firebaseapp.com",
    databaseURL: "https://discord-clone-9a7af.firebaseio.com",
    projectId: "discord-clone-9a7af",
    storageBucket: "discord-clone-9a7af.appspot.com",
    messagingSenderId: "470108382134",
    appId: "1:470108382134:web:6dcc8408108b8c50b45717",
    measurementId: "G-X9WX7X32FH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;