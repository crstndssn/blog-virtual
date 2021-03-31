import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div id="modal-login" class="modal">
                <div class="flex justify-center items-center min-h-75">
                    <div class="container mx-auto flex justify-center items-center">
                        <div class="bg-white lg:w-1/3 md:w-2/3 xs:w-full">
                            <h3 class="font-medium text-6xl mt-2 mb-4">Log In</h3>
                            <form id="form-login">
                                <input type="email" id="login-email"
                                    class="bg-gray-200 text-xl p-4 my-2 w-full rounded-2xl focus:outline-none" placeholder="Email"
                                    autocomplete="off" />
                                <input type="password" id="login-password"
                                    class="bg-gray-200 text-xl p-4 my-2 w-full rounded-2xl focus:outline-none"
                                    placeholder="Contraseña" />
                                <button type="submit"
                                    class="w-full bg-black text-white my-2 p-4 rounded-2xl md:text-2xl xs:text-xl focus:outline-none">Log In</button>
                            </form>
                            <a href="#/reset-password" id="forget-password" class="font-xl flex justify-center w-full my-5 text-gray-500">
                                ¿Olvidaste tu contraseña?
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
