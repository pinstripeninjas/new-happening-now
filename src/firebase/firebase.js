import firebase, { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyBsRSXvo7Ous3dDuMSomlDnifhFWpvkkqc",
	authDomain: "happening-now-f7e8c.firebaseapp.com",
	databaseURL: "https://happening-now-f7e8c.firebaseio.com",
	projectId: "happening-now-f7e8c",
	storageBucket: "happening-now-f7e8c.appspot.com",
	messagingSenderId: "297348080409",
	appId: "1:297348080409:web:475213abfc9b17fdd6db88",
	measurementId: "G-4T4RXVT8M2",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
