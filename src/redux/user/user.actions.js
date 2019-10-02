import { userActionTypes } from './user.types';

export const setCurrentUser = (user) => {
    return {
        type: userActionTypes.SET_CURRENT_USER,
        payload: user
    }
}

export const emailSignInStart = (emailAndPwd) => {
    return {
        type: userActionTypes.EMAIL_SIGNIN_START,
        payload:emailAndPwd
    }
}

export const googleSignInStart = () => {
    return {
        type: userActionTypes.GOOGLE_SIGNIN_START
    }
} 

export const SignInSuccess = (user) => {
    return {
        type: userActionTypes.SIGNIN_SUCCESS,
        payload:user
    }
}

export const SignInFail = (error) => {
    return {
        type: userActionTypes.SIGNIN_FAIL,
        payload:error
    }
}

export const userSessionCheck = () => {
    return {
        type:userActionTypes.USER_SESSION_CHECK
    }
}

export const signOutStart = () => {
    return {
        type:userActionTypes.SIGN_OUT_START
    }
}

export const signOutSuccess = () => {
    return {
        type:userActionTypes.SIGN_OUT_SUCCESS 
    }
}

export const signOutFail = (error ) => {
    return {
        type:userActionTypes.SIGN_OUT_FAIL,
        payload:error

    }
}

export const signUpStart = (userInfo) => {
    return {
        type:userActionTypes.SIGN_UP_START,
        payload: userInfo
    }
}

export const SignUpSuccess = (user) => {
    return {
        type: userActionTypes.SIGN_UP_SUCCESS,
        payload:user
    }
}

export const SignUpFail = (error) => {
    return {
        type: userActionTypes.SIGN_UP_FAIL,
        payload:error
    }
}
