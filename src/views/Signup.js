import React, { Component, useState } from 'react'

const Signup = () => {


    const initialStateValues = {
        name: "",
        email: "",
        password: "",
    }

    const [values, setValues] = useState(initialStateValues);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(values)
    }

    return (
        <div id="modal-signup" className="modal">
            <div className="flex justify-center items-center min-h-75">
                <div className="container mx-auto flex justify-center items-center">
                    <div className="bg-white lg:w-1/3 md:w-2/3 xs:w-full">
                        <h3 className="font-medium text-6xl mt-2 mb-4">Sign Up</h3>
                        <form id="form-signup" onSubmit={handleSubmit}>
                            <input
                                name="name"
                                type="text"
                                id="signup-name"
                                className="bg-gray-200 text-xl p-4 my-2 w-full rounded-2xl focus:outline-none"
                                placeholder="Name"
                                autocomplete="off"
                            />
                            <input
                                name="email"
                                type="email"
                                id="signup-email"
                                className="bg-gray-200 text-xl p-4 my-2 w-full rounded-2xl focus:outline-none"
                                placeholder="Email"
                                autocomplete="off"
                            />
                            <input
                                name="password"
                                type="password" id="signup-password"
                                className="bg-gray-200 text-xl p-4 my-2 w-full rounded-2xl focus:outline-none"
                                placeholder="Password" autocomplete="off" />
                            <button type="submit"
                                className="w-full bg-black text-white my-2 p-4 rounded-2xl md:text-2xl xs:text-lg focus:outline-none">Sign
                                            Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Signup;