
import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app =  firebase.initializeApp({
    apiKey: "AIzaSyCTpu2gUVJLZiJdb0KTY-k94T-r1Ny7tM0",
    authDomain: "blog-virtual.firebaseapp.com",
    projectId: "blog-virtual",
    storageBucket: "blog-virtual.appspot.com",
    messagingSenderId: "128422145273",
    appId: "1:128422145273:web:517ccf7dc8e42f7ebb4628",
    measurementId: "G-KQMR0DSKLN"
});

// Initialize Firebase
const auth = app.auth()
const store = app.firestore()
const storage = app.storage()

export { app, auth, store, storage }