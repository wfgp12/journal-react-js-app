import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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