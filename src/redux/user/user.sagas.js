import {takeLatest, put, all, call} from 'redux-saga/effects';
import {userActionTypes} from './user.types';
import {auth, googleProvider, createUserProfileDocument, getCurrentUser} from '../../firebase/firebase.utils'

import { SignInSuccess, SignInFail, signOutFail, signOutSuccess, SignUpFail, SignUpSuccess} from './user.actions'


// GET SNAPSHOT FROM USER AUTH

export function* getSnapshotFromUserAuth(userAuth) {
    try {
        console.log(userAuth)
        const userRef = yield call(createUserProfileDocument,userAuth)
        const snapshot = yield userRef.get()
        yield put(SignInSuccess({
            id : snapshot.id,
            ...snapshot.data()
        }))
    } catch (error) {
        yield put(SignInFail(error))
    }
}


//SIGN IN WITH GOOGLE SAGAS

export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider)
        yield getSnapshotFromUserAuth(user)
    }
    catch (error){
        yield put(SignInFail(error))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, signInWithGoogle)
}

//SIGN IN WITH EMAIL SAGAS

export function* signInWithEmail({payload:{email, password}}) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password)
        yield getSnapshotFromUserAuth(user)
    }
    catch (error) {
        yield put(SignInFail(error))
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(userActionTypes.EMAIL_SIGNIN_START, signInWithEmail)
}

//SIGN UP SAGAS

export function* getSnapshotFromUserAuth2(userAuth, {displayName}) {
    try {
        console.log(userAuth)
        const userRef = yield call(createUserProfileDocument,userAuth, {displayName})
        const snapshot = yield userRef.get()
        yield put(SignInSuccess({
            id : snapshot.id,
            ...snapshot.data()
        }))
    } catch (error) {
        yield put(SignInFail(error))
    }
}

export function* signingUp({payload:{email,displayName, password}}) {
    try {
        const {user} = yield auth.createUserWithEmailAndPassword(email,password)
        yield put(SignUpSuccess(user))

            try {
                console.log(3, displayName)
                yield getSnapshotFromUserAuth2(user, {displayName})
            }
            catch (error) {
                yield put(SignInFail(error))
            }

    }
    catch (error) {
        yield put(SignUpFail(error))
    }
}

export function* onSignUpStart() {
    yield takeLatest(userActionTypes.SIGN_UP_START, signingUp)
}

// USER SESSION CHECK

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser()
        if (!userAuth) {
            return;
        }
        yield getSnapshotFromUserAuth(userAuth)
        
    }
    catch (error) {
        yield put(signOutFail(error))
    }
}

export function* onUserSessionCheck() {
    yield takeLatest(userActionTypes.USER_SESSION_CHECK, isUserAuthenticated)
}


// SIGN OUT

export function* signOutFromSession() {
    try {
        yield auth.signOut()
        yield put(signOutSuccess())
    }
    catch (error) {
        yield put(signOutFail(error))
    }
}

export function* onSignOutStart() {
    yield takeLatest(userActionTypes.SIGN_OUT_START, signOutFromSession)
}

// ROOT USER SAGA

export function* userSaga() {
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart), call(onUserSessionCheck), call(onSignOutStart), call(onSignUpStart)])
}