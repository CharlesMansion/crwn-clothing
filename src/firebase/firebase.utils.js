import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
    apiKey: "AIzaSyApzfy9iSmGz9z3laxPGJ-LdVgr4uU4YRA",
    authDomain: "crwn-clothing-base.firebaseapp.com",
    databaseURL: "https://crwn-clothing-base.firebaseio.com",
    projectId: "crwn-clothing-base",
    storageBucket: "",
    messagingSenderId: "826697301334",
    appId: "1:826697301334:web:a08251367a5af07d"
}



export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return;
    }
    console.log(2, userAuth)
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error setting user', error.message)
        }
    }
    return userRef;
}

export const importDocumentsAndCollections = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey)
    const batch = firestore.batch();

    objectsToAdd.forEach((obj) => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj)
    })
    return await batch.commit()
}

export const convertCollectionSnapshotToMap = (collections) => {
    const transFormedCollection = collections.docs.map((doc) => {
       
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id:doc.id,
            title,
            items
        };
    })

    return transFormedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {})
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe()
            resolve(userAuth)
        }, reject)
    })
}

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;