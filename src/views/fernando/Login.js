import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { app } from '../../firebase';

const Login = () => {

    const history = useHistory();


    const [msgerror, setMsgError] = useState(null)

    const handleSubmit = async e => {
        e.preventDefault();
        const { email, password } = e.target.elements;

        await app.auth()
            .signInWithEmailAndPassword(email.value, password.value)
            .then(result => {
                console.log(result);
                history.push(`/fernando-rodriguez`);
            })
            .catch(error => {

                console.log(error)

                if (error.code === 'auth/invalid-email') {
                    setMsgError('Email incorrecto')
                }
                if (error.code === 'auth/user-not-found') {
                    setMsgError('Usuario no encontrado')
                }
                if (error.code === 'auth/wrong-password') {
                    setMsgError('Contraseña equivocada')
                }
            })
    }

    return (
        <div id="modal-login" class="modal">
            <div class="flex justify-center items-center min-h-75">
                <div class="container mx-auto flex justify-center items-center flex-col">
                    <div class="bg-white lg:w-1/3 md:w-2/3 xs:w-full">
                        <h3 class="font-medium text-6xl mt-2 mb-4">Log In</h3>
                        <form id="form-login" onSubmit={handleSubmit}>
                            <input
                                name="email"
                                type="email"
                                id="login-email"
                                class="bg-gray-200 text-xl p-4 my-2 w-full rounded-2xl focus:outline-none"
                                placeholder="Email"
                                autocomplete="off"
                            />
                            <input name="password" type="password" id="login-password"
                                class="bg-gray-200 text-xl p-4 my-2 w-full rounded-2xl focus:outline-none"
                                placeholder="Contraseña" />
                            <button type="submit"
                                className="w-full bg-black text-white my-2 p-4 rounded-2xl md:text-2xl xs:text-xl focus:outline-none">Log In</button>
                        </form>
                        <Link to="/fernando-rodriguez/reset" id="forget-password" class="font-xl flex justify-center w-full my-5 text-gray-500">
                            ¿Olvidaste tu contraseña?
                        </Link>
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

export default Login;
