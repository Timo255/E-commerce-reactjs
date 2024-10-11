import app, { db } from "../firebase/firebase"
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword,  getAuth,  GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";


export const AuthContext = createContext();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();


const Authentication = ({children}) => {
   const [user, setUser] = useState(null)


   // create user without googleGmail
   const createUser = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password)
   }

    // create user using gmail
    const SignUpWithGoogle = async () => {
        return await signInWithPopup(auth, googleProvider) 
    }

    // Login
    const Login = async (email, password) => {
        return await signInWithEmailAndPassword(auth, email, password);
    }

    const LogOut = async () => {
        return await signOut(auth);
    }

    // user is available or Not
    const unsubscribe = async () =>{
        auth.onAuthStateChanged(async(user) =>{
            // setLoading(false)
            const docRef = doc(db,"Users", user.uid)
            const docSnap = await getDoc(docRef)
            if(docSnap.exists()){
                setUser(docSnap.data())
            }
    })
}

    useEffect(() => {
        // const unsubscribe = 
        // });
        unsubscribe()
        return () => {
            return unsubscribe();
        }
    
    },[])


   const authInfo = {
    user,
    createUser,
    SignUpWithGoogle,
    Login,
    LogOut,
   }

   return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
   )

}

export default Authentication