import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { auth, store } from '../../firebase'

const Signup = () => {

    const {idUser} = useParams()

    const history = useHistory();

    const [id, setId] = useState('');
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [msgerror, setMsgError] = useState(null)

    const ResgistrarUsuarios = (e) => {
        e.preventDefault()

        console.log(name, email)
        auth.createUserWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result.user.uid)
                setId(result.user.uid)
                console.log(id)
                setEmail(result.user.email)
                createUser(result.user.uid, result.user.email)
                history.push(`/${idUser}`)
            })
            .catch(e => {
                if (e.code === 'auth/invalid-email') {
                    setMsgError('Email incorrecto')
                }
                if (e.code === 'auth/weak-password') {
                    setMsgError('La contraseña debe tener 6 caracteres o más')
                }
            })
    }


    const createUser = async (id, email) => {

        const user = {
            id: id,
            email: email,
            name: name,
            user: true,
            admin: false
        }

        try {
            await store.collection('users').doc(user.id).set(user)
        } catch (e) {
            console.log(e)
        }

    }

    return (
        <div id="modal-signup" className="modal">
            <div className="flex justify-center items-center min-h-75">
                <div className="container mx-auto flex justify-center items-center flex-col">
                    <div className="bg-white lg:w-1/3 md:w-2/3 xs:w-full">
                        <h3 className="font-medium text-6xl mt-2 mb-4">Sign Up</h3>
                        <form id="form-signup" onSubmit={ResgistrarUsuarios
                        }>
                            <input
                                onChange={(e) => { setName(e.target.value) }}
                                type="text"
                                id="signup-name"
                                className="bg-gray-200 text-xl p-4 my-2 w-full rounded-2xl focus:outline-none"
                                placeholder="Name"
                                autocomplete="off"
                            />
                            <input
                                onChange={(e) => { setEmail(e.target.value) }}
                                type="email"
                                id="signup-email"
                                className="bg-gray-200 text-xl p-4 my-2 w-full rounded-2xl focus:outline-none"
                                placeholder="Email"
                                autocomplete="off"
                            />
                            <input
                                onChange={(e) => { setPassword(e.target.value) }}
                                type="password" id="signup-password"
                                className="bg-gray-200 text-xl p-4 my-2 w-full rounded-2xl focus:outline-none"
                                placeholder="Password" autocomplete="off" />
                            <button type="submit"
                                className="w-full bg-black text-white my-2 p-4 rounded-2xl md:text-2xl xs:text-xl focus:outline-none">Sign
                                            Up</button>
                        </form>
                    </div>
                    {
                        msgerror != null ?
                            (
                                <div>
                                    <p className="bg-red-100 text-red-700 p-2 mt-4 rounded">{msgerror}</p>
                                </div>
                            )
                            :
                            (
                                <span>

                                </span>
                            )
                    }
                </div>
            </div>
        </div>
    )
}


export default Signup;