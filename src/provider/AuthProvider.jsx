import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword , signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import useAxiosPublic from '../Hooks/useAxiosPublic';

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const axiosPublic = useAxiosPublic()
    const [loading,setLoading] = useState(true)
    const [user,setUser] = useState(null)
    const newUser =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email, password )
    }

    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () =>{
        return signInWithPopup(auth, provider)
    }
    const signOutUser = () =>{
        setLoading(true)
        return signOut(auth)
    }
    const updateUser =(name,photo)=>{
       return updateProfile(auth.currentUser, {displayName: name, photoURL: photo})
    }
    useEffect(()=>{
        const subscribe = onAuthStateChanged(auth, ( currentUser) => {
            // console.log('current user', currentUser);
            setUser(currentUser);
            const userInfo ={ email: currentUser?.email}
            if (currentUser) {
                axiosPublic.post(`/jwt`,userInfo)
                .then(res=>{
                    console.log()
                    if (res.data.token) {
                       localStorage.setItem("access-token",res.data.token) 
                    }
                })
            } else {
                localStorage.removeItem("access-token")
            }
            setLoading(false)
        })
        return ()=>subscribe()
    },[axiosPublic])

    const info={
        loading,
        user,
        newUser,
        signInUser,
        googleLogin,
        signOutUser,
        updateUser
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;