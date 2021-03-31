import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <nav id="navigationPublic" className="container mx-auto flex justify-between items-center py-8">
                <Link to="/">
                    <h1 className="md:text-3xl xs:text-2xl font-semibold tracking-tighter">Blog Virtual</h1>
                </Link>
                <div className="flex justify-center items-center">
                    <Link to="/signup" className="cursor-pointer font-medium md:text-lg xs:text-base md:mx-6 xs:mx-3 logged-out"
                        id="btn-signup">Sign Up</Link>
                    <Link to="/login"
                        className="cursor-pointer font-medium md:text-lg xs:text-base text-white bg-black py-1 px-3 rounded-md logged-out"
                        id="btn-login">Log In
                </Link>
                </div>
            </nav>
        )
    }
}
