import React, { Component } from 'react'

import { Link } from 'react-router-dom'

export default class NavigationAdmin extends Component {
    render() {
        return (
            <nav id="navigationPrivate" className="container mx-auto flex justify-between items-center py-8">
            <Link className="md:text-3xl xs:text-xl font-semibold xs:hidden md:block tracking-tighter" to="/">Blog Virtual</Link>
            <div className="flex md:justify-center xs:justify-between items-center xs:w-full md:w-auto">
                <Link to="/posts" id="addPostBtn" className="only-admin-add">
                    <img src="https://firebasestorage.googleapis.com/v0/b/supersociedadeselkindussan.appspot.com/o/filesPosts%2F33wkaxK10KMLn7q6m3ZpjWZK57n1%2Fhome.svg?alt=media&token=421fa765-f95b-4f98-bbbe-8e4b37c7ca8e"
                        alt="add" className="w-7 md:mx-3 xs:mx-0"/>
                </Link>
                <Link to="/notifications" className="only-admin-notification">
                    <img src="https://firebasestorage.googleapis.com/v0/b/supersociedadeselkindussan.appspot.com/o/filesPosts%2F33wkaxK10KMLn7q6m3ZpjWZK57n1%2Fbell.svg?alt=media&token=e1cddcd2-d983-45c9-b10a-fb3d4eef9e93"
                        alt="notification" className="w-7 md:mx-3 xs:mx-0"/>
                </Link>
                <Link to="/logout" href="#/login">
                    <img src="https://firebasestorage.googleapis.com/v0/b/supersociedadeselkindussan.appspot.com/o/filesPosts%2F33wkaxK10KMLn7q6m3ZpjWZK57n1%2Flogout%20(1).svg?alt=media&token=c8ea205f-0e47-4727-a45c-0388bc40efbb"
                        alt="user" className="w-7 md:ml-3 xs:mx-0"/>
                </Link>
{/*     
                <img id="userAvatar" className="w-8 md:ml-5 xs:ml-0 rounded-full" alt="user-img" /> */}
    
            </div>
        </nav>
        )
    }
}
