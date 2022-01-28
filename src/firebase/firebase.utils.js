import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const config={
    apiKey: "AIzaSyDVjvMKfs2_CbJd7lDFCQ85pkgoT97LqMA",
    authDomain: "crown-db-c858e.firebaseapp.com",
    projectId: "crown-db-c858e",
    storageBucket: "crown-db-c858e.appspot.com",
    messagingSenderId: "1008372318758",
    appId: "1:1008372318758:web:49a78275522aca06e3dce7",
    measurementId: "${config.measurementId}"
  };

  export const createUserProfileDocument =  async (userauth,additonalData)=>{
    console.log(userauth)
    if(!userauth) return;

    const userRef = firestore.doc(`users/${userauth.uid}`); 
    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName, email} = userauth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additonalData
        })
      }catch(error){
        console.log(error.message);
      }
    }

    return userRef;
  }

  firebase.initializeApp(config); 

  export const auth= firebase.auth();
  export const firestore= firebase.firestore();
  
  const provider= new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle =()=> auth.signInWithPopup(provider);

  export default firebase;