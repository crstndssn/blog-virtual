
import firebase from 'firebase/app'
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCTpu2gUVJLZiJdb0KTY-k94T-r1Ny7tM0",
    authDomain: "blog-virtual.firebaseapp.com",
    projectId: "blog-virtual",
    storageBucket: "blog-virtual.appspot.com",
    messagingSenderId: "128422145273",
    appId: "1:128422145273:web:517ccf7dc8e42f7ebb4628",
    measurementId: "G-KQMR0DSKLN"
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();