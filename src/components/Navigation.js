import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { auth, store } from '../firebase'


import infoSvg from '../resources/info.svg'

import { HomeIcon } from '@heroicons/react/solid'
import { CogIcon } from '@heroicons/react/solid'
import { LogoutIcon } from '@heroicons/react/outline'


const Navigation = (datos) => {

    const { id } = useParams()

    const history = useHistory();

    const [usuario, setUsuario] = useState(null)

    const [admin, setAdmin] = useState(null)

    useEffect(async () => {

        buscarUsuario(id)

        auth.onAuthStateChanged((user) => {

            if (user) {
                setUsuario(true)
                console.log(user)
                if (user.email == 'blogvirtualco@gmail.com') {
                    setAdmin(true)
                    console.log('blogvirtualllll')
                }
            } else {
                console.log('what user?')
                console.log(id + ' <- eee')
            }
        })
    }, [])

    const buscarUsuario = () => {
        console.log('buscar usuario' + id)
    }


    const CerrarSesion = () => {
        auth.signOut()
        setUsuario(null)
        history.push(`/${datos.userName}`)
    }


    return (
        <nav className="container mx-auto flex justify-between items-center py-8">
            <Link className="w-full md:text-3xl xs:text-xl font-semibold xs:hidden md:block tracking-tighter">Blog Virtual</Link>
            {
                usuario ?
                    (
                        <div className="flex md:justify-end xs:justify-between items-center xs:w-full lg:w-1/5 md:w-1/3 sm:w-1/3">
                            {
                                admin === true ? (
                                    <div className="flex justify-between items-center w-full">
                                        {/* <Link to={`/${props.userUrl}`}  id="addPostBtn" className="only-admin-add">
                                            <HomeIcon className="w-9" />
                                        </Link> */}
                                        <Link to={`/${datos.userName}/admin`} className="flex justify-center items-center cursor-pointer hover:shadow py-1 px-3 rounded-xl border mr-2">
                                            <CogIcon className="w-7 mr-1" />
                                            <p className="text-xl">Admin</p>
                                        </Link>
                                        <div onClick={CerrarSesion} className="flex justify-end items-center xs:w-full md:w-auto bg-black text-white px-3 py-1 rounded-lg" >
                                            <LogoutIcon className="w-7 mr-1" />
                                            <p className="text-xl">Salir</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex justify-end items-center xs:w-full md:w-auto bg-black text-white px-3 py-1 rounded-lg">
                                        <div onClick={CerrarSesion} className="cursor-pointer flex justify-center items-center" >
                                            <LogoutIcon className="w-6 mr-2" />
                                            <p className="text-lg">Salir</p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    )
                    :
                    (
                        <div className="w-full flex justify-end items-center">
                            <Link to={`/${datos.userName}/signup`} className="cursor-pointer font-medium md:text-xl xs:text-lg mx-6 logged-out"
                                id="btn-signup">Sign Up</Link>
                            <Link
                                to={`/${datos.userName}/login`}
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
