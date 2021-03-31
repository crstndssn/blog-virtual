
import React, { useEffect, useState } from "react";
import { db } from "./firebase";
// import Cargando from '../components/Cargando'

export const Auth = React.createContext();

export const AuthContext = ({ children }) => {
    const [usuario, setUsuario] = useState(null);
    const [showChild, setShowChild] = useState(false);

    useEffect(() => {
        db.auth().onAuthStateChanged(function (user) {
            setUsuario(user);
            setShowChild(true);
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