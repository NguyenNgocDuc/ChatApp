import * as firebase from 'firebase';
const config = {
 	apiKey: "AIzaSyCSc5nrGUK5QO4nhkRMIwAaMNOlAIt_zh4",
    authDomain: "chatapp-6ddf3.firebaseapp.com",
    databaseURL: "https://chatapp-6ddf3.firebaseio.com",
    projectId: "chatapp-6ddf3",
    storageBucket: "chatapp-6ddf3.appspot.com",
    messagingSenderId: "677928106747"
};
firebase.initializeApp(config);

export const database = firebase.database().ref('posts/');
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
