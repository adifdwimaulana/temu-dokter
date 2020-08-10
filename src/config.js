import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDeYhZ072HQhHPYNDNqxjhNTkIyRlCY8bs",
    authDomain: "hospital-data-cakra.firebaseapp.com",
    databaseURL: "https://hospital-data-cakra.firebaseio.com",
    projectId: "hospital-data-cakra",
    storageBucket: "hospital-data-cakra.appspot.com",
    messagingSenderId: "64541127508",
    appId: "1:64541127508:web:de211abd43fb21223c4ec1",
    measurementId: "G-7NE59VTTL7"
}

firebase.initializeApp(config)

export const auth = firebase.auth;
export const db = firebase.database();
export const store = firebase.firestore();