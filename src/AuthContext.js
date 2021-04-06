
import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
// import Cargando from '../components/Cargando'

export const Auth = React.createContext();

export const AuthContext = ({ children }) => {
    
    const [usuario, setUsuario] = useState(null);
    const [showChild, setShowChild] = useState(false);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUsuario(user);
            setShowChild(true);
            console.log(user)
            debugger;
        })
    }, [])

    if (!showChild) {
        return console.log('loading');
    } else {
        return (
            <Auth.Provider
                value={{
                    usuario
                }}
            >
                {children}
            </Auth.Provider>
        );
    }
}