import {
    loggingWhitEmailPassword,
    logoutFirebase,
    registerUserWithEmailPassword,
    signInWithGoogle
} from "../../firebase/providers"
import { checkingCredentials, login, logout } from "./"

export const checkingAuthentication = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const result = await signInWithGoogle();
        if (!result.ok) return dispatch(logout(result.message));

        dispatch(login(result))
    }
}

export const startCreatingUserWhitEmailPassword = ({ email, password, displayName }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const { ok, uid, photoURL, message: errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });
        if (!ok) return dispatch(logout(errorMessage));

        dispatch(login({ uid, email, displayName, photoURL }));
    }
}

export const startLoggingInWithEmailPassword = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const { ok, uid, displayName, photoURL, message: errorMessage } = await loggingWhitEmailPassword({ email, password });
        if (!ok) return dispatch(logout(errorMessage));

        dispatch(login({ uid, email, displayName, photoURL }));
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await logoutFirebase();

        dispatch(logout());
    }
}