import * as firebase from "firebase";

const keys = {
  apiKey: "AIzaSyCiVv-lcHSfVJteXkV-sZ4gQLfHmSRewdE",
  authDomain: "my-blog-fa7e9.firebaseapp.com",
  databaseURL: "https://my-blog-fa7e9.firebaseio.com",
  projectId: "my-blog-fa7e9",
  storageBucket: "my-blog-fa7e9.appspot.com",
  messagingSenderId: "804263562597"
};

firebase.initializeApp(keys);

export default class Firebase {
  static Login() {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleAuthProvider);
  }
  static Logout() {
    return firebase.auth().signOut()
  }
}
