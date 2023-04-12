import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendEmailVerification} from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)
const UseContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser =(email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);

    }

    const signInUser =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)

    }
    const userLogOut=()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, nUser =>{
            setUser(nUser);
            setLoading(false)
        });
        return ()=>{
            unsubscribe();
        }
    })
    const updateName =(uName)=>{
        return updateProfile(auth.currentUser, {
          displayName:uName,
          photoURL: "https://example.com/jane-q-user/profile.jpg"
})
}
 const verifyEmail=()=>{
       return sendEmailVerification(auth.currentUser)
}
    const authInfo = {
        createUser,
        updateName,
        signInUser,
        user,
        loading,
        setLoading,
        userLogOut,
        verifyEmail
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}> 
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UseContext;