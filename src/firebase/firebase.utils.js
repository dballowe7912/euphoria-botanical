


  import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBDqPDPdBy2wE0bM6uw21pSqucuG1-NYOo",
    authDomain: "euphoria-botanical-fec4a.firebaseapp.com",
    projectId: "euphoria-botanical-fec4a",
    storageBucket: "euphoria-botanical-fec4a.appspot.com",
    messagingSenderId: "925921728435",
    appId: "1:925921728435:web:2cc5087d9f1ff9218a5dc6",
    measurementId: "G-1Y8DC89WWK"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`)
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
  
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (err) {
        console.log('error creating user', err.message);
      }
    }
  
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ promt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;