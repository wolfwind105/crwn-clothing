import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword
} from 'firebase/auth'
import {
    getFirestore,
    doc,
    setDoc,
    getDoc
} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBgAi-lviC1wEulOy7cQzym1GFMkJEqYpo",
    authDomain: "crwn-clothing-db-b71f3.firebaseapp.com",
    projectId: "crwn-clothing-db-b71f3",
    storageBucket: "crwn-clothing-db-b71f3.appspot.com",
    messagingSenderId: "487430964812",
    appId: "1:487430964812:web:41093d7345467d13d856e9"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
    userAuth, 
    additionalInformation = {}
    ) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createAt,
                ...additionalInformation,
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
}