import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth, store } from '../firebase'

import  AddPosts from '../components/blog/AddPost'
import  Info from '../components/blog/Info'


const Home = () => {

    const [user, setUser] = useState(null)

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(true)
            }
        })
    })

    return (
        <>
           {
               user === true ?
               (
                    <AddPosts/>
               ) : (
                    <Info/>
               )
           } 
        </>
    )
}

export default Home
