import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.googleProvider = new app.auth.GoogleAuthProvider();
  }

  isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId === this.googleProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  };

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  // TODO: refactor google login
  doSignInWithGoogle = (googleUser, callback) => {
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var isUserEqual = this.isUserEqual;
    const auth = this.auth;
    const googleProvider = this.googleProvider;
    var unsubscribe = this.auth.onAuthStateChanged(function(firebaseUser) {
      unsubscribe();
      if (firebaseUser) {
        console.log('a user is logged in');
      }
      // Check if we are already signed-in Firebase with the correct user.
      if (!isUserEqual(googleUser, firebaseUser)) {
        // Build Firebase credential with the Google ID token.
        var credential = googleProvider.credential(
          googleUser.getAuthResponse().id_token
        );
        // Sign in with credential from the Google user.
        auth
          .signInAndRetrieveDataWithCredential(credential)
          .then(callback)
          .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
      } else {
        console.log('User already signed-in Firebase.');
      }
    });
  };

  getIdToken = () => {
    console.log('get token');
    this.auth.currentUser
      .getIdToken(/* forceRefresh */ true)
      .then(function(idToken) {
        // Send token to your backend via HTTPS
        console.log(idToken);
        // ...
      })
      .catch(function(error) {
        // Handle error
      });
  };

  doSignOut = () => {
    this.auth.signOut();
    let googleAuth = window.gapi.auth2.getAuthInstance();
    googleAuth.signOut();
  };

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;
