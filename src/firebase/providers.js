import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {

        const { user: {
            uid,
            displayName,
            email,
            photoURL,
        } } = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);

        return {
            ok: true,
            uid,
            displayName, 
            email, 
            photoURL, 
        }
    } catch (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(error);
        return {
            ok: false,
            code: errorCode,
            message: errorMessage
        }
    }
}


export const registerUserWithEmailPassword = async({email, password, displayName}) => {
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid, photoURL} = resp.user;

        //TODO: Actualizar el displayName en Firebase
        await updateProfile(FirebaseAuth.currentUser, {displayName});

        return {
            ok: true,
            uid,
            photoURL
        }
    } catch (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(error);
        return {
            ok: false,
            code: errorCode,
            message: errorMessage
        }
    }
}