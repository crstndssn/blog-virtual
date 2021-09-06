import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth, store } from '../../firebase'

import infoSvg from '../../resources/info.svg'


const Navigation = () => {

    const history = useHistory();

    const [usuario, setUsuario] = useState(null)

    const [user, setUser] = useState(null)
    const [admin, setAdmin] = useState(null)

    useEffect(() => {

        auth.onAuthStateChanged((user) => {

            if (user) {
                setUsuario(true)
                history.push('/fernando-rodriguez/info')
            }

            if (user.email === 'fr136881@gmail.com') {
                setAdmin(true)
                setUser(false)
            } else {
                setUser(true)
                setAdmin(false)
            }
        })

    }, [])


    const CerrarSesion = () => {
        auth.signOut()
        setUsuario(null)
        history.push('/fernando-rodriguez/login')
    }


    return (
        <nav className="container mx-auto flex justify-between items-center py-8">
            <Link className="w-full md:text-3xl xs:text-xl font-semibold xs:hidden md:block tracking-tighter" to="/fernando-rodriguez">Blog Virtual</Link>
            {
                usuario ?
                    (
                        <div className="flex md:justify-center xs:justify-between items-center xs:w-full md:w-auto">
                            {
                                admin === true ? (
                                    <div className="flex md:justify-center xs:justify-between items-center xs:w-full md:w-auto">
                                        <Link to="/fernando-rodriguez/info" id="addPostBtn" className="only-admin-add">
                                            <img src={infoSvg}
                                                alt="add" className="w-7 md:mx-6 xs:mx-0" />
                                        </Link>
                                        <Link exact to="/fernando-rodriguez/posts" id="addPostBtn" className="only-admin-add">
                                            <img src="https://firebasestorage.googleapis.com/v0/b/supersociedadeselkindussan.appspot.com/o/filesPosts%2F33wkaxK10KMLn7q6m3ZpjWZK57n1%2Fhome.svg?alt=media&token=421fa765-f95b-4f98-bbbe-8e4b37c7ca8e"
                                                alt="add" className="w-7 md:mx-6 xs:mx-0" />
                                        </Link>
                                        {/* <Link to="/fernando-rodriguez/notifications" className="only-admin-notification">
                                            <img src="https://firebasestorage.googleapis.com/v0/b/supersociedadeselkindussan.appspot.com/o/filesPosts%2F33wkaxK10KMLn7q6m3ZpjWZK57n1%2Fbell.svg?alt=media&token=e1cddcd2-d983-45c9-b10a-fb3d4eef9e93"
                                                alt="notification" className="w-7 md:mx-6 xs:mx-0" />
                                        </Link> */}
                                        <p onClick={CerrarSesion} >
                                            <img src="https://firebasestorage.googleapis.com/v0/b/supersociedadeselkindussan.appspot.com/o/filesPosts%2F33wkaxK10KMLn7q6m3ZpjWZK57n1%2Flogout%20(1).svg?alt=media&token=c8ea205f-0e47-4727-a45c-0388bc40efbb"
                                                alt="user" className="w-7 md:ml-6 xs:mx-0 cursor-pointer" />
                                        </p>
                                    </div>
                                ) : (
                                    <div className="flex md:justify-center xs:justify-between items-center xs:w-full md:w-auto">
                                        <Link exact to="/fernando-rodriguez/info" id="addPostBtn" className="only-admin-add">
                                            <img src={infoSvg}
                                                alt="add" className="w-7 md:mx-6 xs:mx-0" />
                                        </Link>
                                        <Link to="/fernando-rodriguez/posts" id="addPostBtn" className="only-admin-add">
                                            <img src="https://firebasestorage.googleapis.com/v0/b/supersociedadeselkindussan.appspot.com/o/filesPosts%2F33wkaxK10KMLn7q6m3ZpjWZK57n1%2Fhome.svg?alt=media&token=421fa765-f95b-4f98-bbbe-8e4b37c7ca8e"
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
                            <Link to="/fernando-rodriguez/signup" className="cursor-pointer font-medium md:text-xl xs:text-lg mx-6 logged-out"
                                id="btn-signup">Sign Up</Link>
                            <Link to="/fernando-rodriguez/login"
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
