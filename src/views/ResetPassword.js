import React, { Component } from 'react'

export default class ResetPassword extends Component {
    render() {
        return (
            <div id="modal-login" className="modal">
                <div className="flex justify-center items-center min-h-75">
                    <div className="container mx-auto flex justify-center items-center">
                        <div className="bg-white lg:w-1/3 md:w-2/3 xs:w-full">
                            <h3 className="font-base text-3xl mt-2 mb-4 text-center">Te enviaremos un link para que actualices tu contraseña</h3>
                            <form id="reset-form">
                                <input type="email" id="reset-email"
                                    className="bg-gray-200 text-xl p-4 my-2 w-full rounded-2xl focus:outline-none" placeholder="Email"
                                    autocomplete="off" />
                                <button type="submit"
                                    className="w-full bg-black text-white my-2 p-3 rounded-2xl md:text-xl xs:text-lg focus:outline-none">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
