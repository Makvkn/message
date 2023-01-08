import {createContext, useEffect, useState} from "react";
import {auth} from "../../firebase"
import {onAuthStateChanged} from "firebase/auth"
import firebase from "firebase/compat";
// import (createContext())



export const AuthContext = createContext<any >(null);

export const AuthContextProvider: any = ({children}: any) => {
    const [currentUser, setCurrentUser] = useState({});


    useEffect(() => {
        onAuthStateChanged(auth, (user: any) => {
            setCurrentUser(user);
            console.log(user)
        })
    }, []);

// <AuthContext.Provider value = {{currentUser}}>
//     {children}
//     </AuthContext.Provider>

}

