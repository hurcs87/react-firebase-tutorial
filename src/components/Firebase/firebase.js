import app from 'firebase/app';
import 'firebase/auth';
import keys from './keys'

const config = {
  apiKey: keys.API_KEY,
  authDomain: keys.AUTH_DOMAIN,
  databaseURL: keys.DATABASE_URL,
  projectId: keys.PROJECT_ID,
  storageBucket: keys.STORAGE_BUCKET,
  messagingSenderId: keys.MESSAGING_SENDER_ID,
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();

    this.googleProvider = new app.auth.GoogleAuthProvider();
  }

  // Auth API

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email,password);

    doSignInWithGoogle = () =>
      this.auth.signInWithPopup(this.googleProvider);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

}

export default Firebase;
