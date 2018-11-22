import * as firebase from "firebase";

const keys = {
  apiKey: "AIzaSyDB_B-chtnaDDlvThaGFYRw2MhEe3N-AAc",
  authDomain: "rishithegamecreator-1054.firebaseapp.com",
  databaseURL: "https://rishithegamecreator-1054.firebaseio.com",
  projectId: "rishithegamecreator-1054",
  storageBucket: "rishithegamecreator-1054.appspot.com",
  messagingSenderId: "111029591174"
};

firebase.initializeApp(keys);

export default class Firebase {
  static LoginViaGoogle() {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleAuthProvider);
  }

  static LoginViaForm(email, pass) {
    return firebase.auth().signInWithEmailAndPassword(email, pass);
  }

  static onAuthStateChanged(callback) {
    return firebase.auth().onAuthStateChanged(user => callback(user));
  }

  static Logout() {
    return firebase.auth().signOut()
  }
}
