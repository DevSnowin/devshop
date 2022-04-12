import {initializeApp} from "firebase/app"
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5ifbgjhz_ZXeQDWzlDjlPmq4wrhdF0mM",
  authDomain: "react-devshop.firebaseapp.com",
  projectId: "react-devshop",
  storageBucket: "react-devshop.appspot.com",
  messagingSenderId: "99600668251",
  appId: "1:99600668251:web:b70299d68dd52106cf917e"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    // If user data does not exist
    // create / set the document with the data from userAuth in my collection
    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createAt
            });
        }
        catch (error){
            console.log('error creating the user', error.message);
        }
    }


    // If user data exists / return userDocRef
    return userDocRef;
}
