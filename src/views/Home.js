import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { auth, store } from '../firebase'

import  AddPosts from '../components/blog/AddPost'
import  Info from '../components/blog/Info'
import Navigation from '../components/Navigation'


const Home = () => {

    const { id } = useParams()

    const [user, setUser] = useState(null)
    const [userName, setUserName] = useState('')

    useEffect(() => {
        auth.onAuthStateChanged((user) => { 
            if (user) {
                setUser(true)
                console.log(id + ' user')
                setUserName(id)
            } else {
                console.log(id + ' user')
                setUserName(id)
            }
        })
    })

    return (
        <>
            <Navigation userName={userName}/>
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
