import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendEmailVerification } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)
const UseContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState('')
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('data'))
        setUser(userData)
        const unsubscribe = onAuthStateChanged(auth, () => {
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])

    const logOut = () => {
        setUser()
    }


    const authInfo = {

        user,
        loading,
        setLoading,
        logOut

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