import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth, store } from '../firebase'

import mail from '../resources/mail.svg'


const Navigation = () => {

    const history = useHistory();

    const [usuario, setUsuario] = useState(null)

    const [userStatus, setUserStatus] = useState('')
    const [user, setUser] = useState(null)
    const [admin, setAdmin] = useState(null)
    const [superadmin, setSuperadmin] = useState(null)

    useEffect(() => {

        auth.onAuthStateChanged((user) => {
            if (user) {
                setUsuario(user.uid)
                console.log(user.email)
            }
        })

        store.collection('users').where("id", "==", usuario)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log(doc.data().status);
                    setUserStatus(doc.data().status)
                    switch (userStatus) {
                        case 'user':
                            setUser(userStatus)
                            break;
                        case 'admin':
                            setAdmin(userStatus)
                            break;
                        case 'user':
                            setSuperadmin(userStatus)
                            break;
                        default:
                            break;
                    }
                });
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });

    }, [])
    

    const CerrarSesion = () => {
        auth.signOut()
        setUsuario(null)
        history.push('/login')
    }


    return (
        <nav className="container mx-auto flex justify-between items-center py-8">
            <Link className="w-full md:text-3xl xs:text-xl font-semibold xs:hidden md:block tracking-tighter" to="/">Blog Virtual</Link>
            {
                usuario ?
                    (
                        <div className="flex md:justify-center xs:justify-between items-center xs:w-full md:w-auto">
                            {
                                admin ? (
                                    <div className="flex md:justify-center xs:justify-between items-center xs:w-full md:w-auto">
                                        <Link exact to="/" id="addPostBtn" className="only-admin-add">
                                            <img src="https://firebasestorage.googleapis.com/v0/b/supersociedadeselkindussan.appspot.com/o/filesPosts%2F33wkaxK10KMLn7q6m3ZpjWZK57n1%2Fhome.svg?alt=media&token=421fa765-f95b-4f98-bbbe-8e4b37c7ca8e"
                                                alt="add" className="w-7 md:mx-6 xs:mx-0" />
                                        </Link>
                                        <Link to="/posts" id="addPostBtn" className="only-admin-add">
                                            <img src="https://firebasestorage.googleapis.com/v0/b/supersociedadeselkindussan.appspot.com/o/filesPosts%2F33wkaxK10KMLn7q6m3ZpjWZK57n1%2Fadd%20(1).svg?alt=media&token=021cc339-583c-415c-80e4-fdc64346282f"
                                                alt="add" className="w-7 md:mx-6 xs:mx-0" />
                                        </Link>
                                        <Link to="/notifications" className="only-admin-notification">
                                            <img src="https://firebasestorage.googleapis.com/v0/b/supersociedadeselkindussan.appspot.com/o/filesPosts%2F33wkaxK10KMLn7q6m3ZpjWZK57n1%2Fbell.svg?alt=media&token=e1cddcd2-d983-45c9-b10a-fb3d4eef9e93"
                                                alt="notification" className="w-7 md:mx-6 xs:mx-0" />
                                        </Link>
                                        <p onClick={CerrarSesion} >
                                            <img src="https://firebasestorage.googleapis.com/v0/b/supersociedadeselkindussan.appspot.com/o/filesPosts%2F33wkaxK10KMLn7q6m3ZpjWZK57n1%2Flogout%20(1).svg?alt=media&token=c8ea205f-0e47-4727-a45c-0388bc40efbb"
                                                alt="user" className="w-7 md:ml-6 xs:mx-0 cursor-pointer" />
                                        </p>
                                    </div>
                                ) : (
                                    <div className="flex md:justify-center xs:justify-between items-center xs:w-full md:w-auto">
                                        <Link exact to="/" id="addPostBtn" className="only-admin-add">
                                            <img src="https://firebasestorage.googleapis.com/v0/b/supersociedadeselkindussan.appspot.com/o/filesPosts%2F33wkaxK10KMLn7q6m3ZpjWZK57n1%2Fhome.svg?alt=media&token=421fa765-f95b-4f98-bbbe-8e4b37c7ca8e"
                                                alt="add" className="w-7 md:mx-6 xs:mx-0" />
                                        </Link>
                                        <Link to="/posts" id="addPostBtn" className="only-admin-add">
                                            <img src="https://firebasestorage.googleapis.com/v0/b/supersociedadeselkindussan.appspot.com/o/filesPosts%2F33wkaxK10KMLn7q6m3ZpjWZK57n1%2Fadd%20(1).svg?alt=media&token=021cc339-583c-415c-80e4-fdc64346282f"
                                                alt="add" className="w-7 md:mx-6 xs:mx-0" />
                                        </Link>
                                        <p onClick={CerrarSesion} >
                                            <img src="https://firebasestorage.googleapis.com/v0/b/supersociedadeselkindussan.appspot.com/o/filesPosts%2F33wkaxK10KMLn7q6m3ZpjWZK57n1%2Flogout%20(1).svg?alt=media&token=c8ea205f-0e47-4727-a45c-0388bc40efbb"
                                                alt="user" className="w-7 md:ml-6 xs:mx-0 cursor-pointer" />
                                        </p>
                                    </div>
                                )
                            }

                        </div>

                    )
                    :
                    (

                        <div className="w-full flex justify-end items-center">
                            <Link to="/signup" className="cursor-pointer font-medium md:text-xl xs:text-lg mx-6 logged-out"
                                id="btn-signup">Sign Up</Link>
                            <Link to="/login"
                                className="cursor-pointer font-medium md:text-lg xs:text-xl text-white bg-black py-1 px-3 rounded-md logged-out"
                                id="btn-login">Log In
                            </Link>
                        </div>

                    )
            }
        </nav>
    )

}

export default Navigation
