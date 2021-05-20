import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth, store } from '../firebase'


import infoSvg from '../resources/info.svg'

import { HomeIcon } from '@heroicons/react/solid'
import { CogIcon } from '@heroicons/react/solid'
import { LogoutIcon } from '@heroicons/react/outline'


const Navigation = () => {

    const history = useHistory();

    const [usuario, setUsuario] = useState(null)

    const [admin, setAdmin] = useState(null)

    useEffect(() => {

        auth.onAuthStateChanged((user) => {

            if (user) {
                setUsuario(true)
                history.push('/beta/home')
            }

            if (user.email === 'dussan29@gmail.com') {
                setAdmin(true)
            } else {
                setAdmin(false)
            }
        })

    }, [])


    const CerrarSesion = () => {
        auth.signOut()
        setUsuario(null)
        history.push('/beta/home')
    }


    return (
        <nav className="container mx-auto flex justify-between items-center py-8">
            <Link className="w-full md:text-3xl xs:text-xl font-semibold xs:hidden md:block tracking-tighter" to="/beta/home">Blog Virtual</Link>
            {
                usuario ?
                    (
                        <div className="flex md:justify-center xs:justify-between items-center xs:w-full md:w-1/5 sm:w-1/3">
                            {
                                admin === true ? (
                                    <div className="flex justify-between items-center w-full">
                                        <Link to="/beta/home" id="addPostBtn" className="only-admin-add">
                                            <HomeIcon className="w-9" />
                                        </Link>
                                        <Link to="/beta/admin" className="only-admin-notification">
                                            <CogIcon className="w-9" />
                                        </Link>
                                        <p onClick={CerrarSesion} >
                                            <LogoutIcon className="w-9 cursor-pointer" />
                                        </p>
                                    </div>
                                ) : (
                                    <div className="flex justify-between items-center xs:w-full md:w-auto">
                                        <Link to="/beta/home" id="addPostBtn" className="only-admin-add">
                                            <HomeIcon className="w-8 md:mx-6 xs:mx-0" />
                                        </Link>
                                        <Link to="/beta/admin" className="only-admin-notification">
                                            <CogIcon className="w-8 md:mx-6 xs:mx-0" />
                                        </Link>
                                        <p onClick={CerrarSesion} >
                                            <LogoutIcon className="w-8 md:ml-6 xs:mx-0 cursor-pointer" />
                                        </p>
                                    </div>
                                )
                            }
                        </div>
                    )
                    :
                    (
                        <div className="w-full flex justify-end items-center">
                            <Link to="/beta/signup" className="cursor-pointer font-medium md:text-xl xs:text-lg mx-6 logged-out"
                                id="btn-signup">Sign Up</Link>
                            <Link to="/beta/login"
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
