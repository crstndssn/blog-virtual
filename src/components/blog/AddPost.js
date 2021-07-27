
import React, { useState, useEffect } from 'react';
import { auth, store, storage } from '../../firebase'

import { useParams } from 'react-router-dom'

import Icon from '@mdi/react'
import { mdiEyeOutline } from '@mdi/js'
import Navigation from '../Navigation';

const AddPost = () => {

    const { id } = useParams();

    const { superUser } = useParams()

    const [modoedicion, setModoEdicion] = useState(null)
    const [idusuario, setIdUsuario] = useState('')

    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [autor, setAutor] = useState('')

    const [linkFile, setLinkFile] = useState('')
    const [error, setError] = useState('')
    const [postuser, setPostUser] = useState([])

    const [user, setUser] = useState(null)
    const [admin, setAdmin] = useState(null)


    useEffect(() => {

        const getPosts = async () => {
            const { docs } = await store.collection('posts')
                .orderBy('date', 'desc')
                .where('autor', '==', id).get()

            const nuevoArray = docs.map(item => ({ id: item.id, ...item.data() }))
            setPostUser(nuevoArray)
            console.log(id)
        }
        getPosts()

    }, [])


    const idContainer = () => {

        auth.onAuthStateChanged((user) => {

            if (user.email === 'dussan29@gmail.com') {
                setAdmin(true)
                setUser(false)
                setAutor(user.email)
            } else {
                setUser(true)
                setAdmin(false)
            }
        })

    }

    idContainer()


    const setPosts = async (e) => {

        e.preventDefault()

        if (!title.trim()) {
            setError('El campo nombre está vacio')
        }
        if (!date.trim()) {
            setError('El campo fecha está vacio')
        }
        if (!linkFile.trim()) {
            setError('No tiene link')
        }

        const post = {
            title: title,
            date: date,
            linkFile: linkFile,
            autor: autor
        }

        try {
            await store.collection('posts').add(post)
            const { docs } = await store.collection('posts').orderBy('date', 'desc')
                .where('autor', '==', 'dussan29@gmail.com').get()
            const nuevoArray = docs.map(item => ({ id: item.id, ...item.data() }))
            setPostUser(nuevoArray)
            console.log('post añadido')
        } catch (e) {
            console.log(e)
        }

        setTitle('')
        setDate('')
        setLinkFile('')

    }


    const BorrarUsuario = async (id) => {

        try {
            await store.collection('posts').doc(id).delete()
            const { docs } = await store.collection('posts').orderBy('date', 'desc')
                .where('autor', '==', 'dussan29@gmail.com').get()
            const nuevoArray = docs.map(item => ({ id: item.id, ...item.data() }))
            setPostUser(nuevoArray)
        } catch (e) {
            console.log(e)
        }

    }


    // const PulsarActualizar = async (id) => {
    //     try {
    //         const data = await store.collection('posts').doc(id).get()
    //         const { title, date } = data.data()
    //         setTitle(title)
    //         setDate(date)
    //         setLinkFile(linkFile)
    //         console.log(linkFile)
    //         setIdUsuario(id)
    //         setModoEdicion(true)
    //         console.log(id)
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }


    const setUpdate = async (e) => {

        e.preventDefault()

        if (!title.trim()) {
            setError('El campo nombre está vacio')
        }
        if (!date.trim()) {
            setError('El campo fecha está vacio')
        }
        if (!linkFile.trim()) {
            setError('No tiene link')
        }

        const postUpdate = {
            title: title,
            date: date,
            linkFile: linkFile
        }

        try {
            await store.collection('posts').doc(idusuario).set(postUpdate)
            const { docs } = await store.collection('posts').get()
            const nuevoArray = docs.map(item => ({ id: item.id, ...item.data() }))
            setPostUser(nuevoArray)
        } catch (e) {
            console.log(e)
        }

        setTitle('')
        setDate('')
        setLinkFile('')
        setModoEdicion(false)

    }


    const uploadFile = (e) => {

        // setFile(e.target.files[0]);

        let file = e.target.files[0];
        let bucketName = 'posts'
        let refStorage = storage.ref(`${bucketName}/${file.name}`)
        let upload = refStorage.put(file)

        upload.on(
            'state_changed',
            snapshot => {
                const porcentaje = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                console.log(porcentaje)
            },
            err => {
                console.log(err)
            },
            () => {
                upload.snapshot.ref
                    .getDownloadURL()
                    .then(url => {
                        setLinkFile(url)
                        sessionStorage.setItem('imgNewPost', url)
                    })
                    .catch(err => {
                        console.log(`Error obteniedo id ${err}`)
                    })
            }
        )

    }

    return (

        <>
            <div className="container mx-auto grid md:grid-cols-3 gap-4">
                {
                    admin === true ? (
                        <form id="form-submit" onSubmit={modoedicion ? setUpdate : setPosts} className="md:row-span-2 flex justify-around items-center flex-col lg:w-full sm:w-full xs:w-full border p-4 rounded-xl md:mb-0 xs:mb-4" id="form-post">
                            <div className="w-full mr-3">
                                <textarea
                                    value={title}
                                    onChange={(e) => { setTitle(e.target.value) }}
                                    placeholder="Descripción"
                                    autocomplete="off"
                                    className="
                        w-full h-full border focus-within:shadow 
                        py-2 px-3 rounded-xl 
                        md:text-2xl xs:text-xl font-medium 
                        text-gray-800
                        focus:outline-none"
                                />
                            </div>
                            <div className="flex w-full flex-col justify-between">
                                <input
                                    value={date}
                                    onChange={(e) => { setDate(e.target.value) }}
                                    type="date"
                                    className="
                            w-1/2 py-1 px-2 
                            border
                            hover:shadow 
                            rounded-xl mb-2
                            cursor-pointer 
                            focus:outline-none my-4"
                                />
                                <div className="w-1/2 flex flex-col p-2">
                                    <input
                                        onChange={(e) => { uploadFile(e) }}
                                        name="upload-image"
                                        className="file focus:outline-none"
                                        type="file" />
                                </div>
                            </div>

                            {
                                modoedicion ?
                                    (
                                        <button action="submit"
                                            className="md:w-2/3 xs:w-full bg-black text-white my-4 px-1 rounded-xl md:text-2xl xs:text-xl focus:outline-none">Actualizar</button>
                                    )
                                    :
                                    (
                                        <button action="submit"
                                            className="w-full bg-black text-white p-1 rounded-full md:text-xl xs:text-lg focus:outline-none">Publicar</button>
                                    )
                            }

                            {
                                error ?
                                    (
                                        <div>
                                            <p className="bg-red-100 text-red-700 p-2 mt-4 rounded">{error}</p>
                                        </div>
                                    )
                                    :
                                    (
                                        <span></span>
                                    )
                            }

                        </form>

                    ) : (
                        <span></span>
                    )
                }

                {
                    postuser.length !== 0 ? (
                        postuser.map(item => (
                            <div className="w-full border rounded-xl p-4 mb-2 flex justify-between items-center">
                                <div key={item.id} className="flex justify-between items-start w-full h-full flex-col">
                                    <div className="w-full flex justify-between flex-col">
                                        <p className="text-2xl font-medium">{item.title}</p>
                                        <p className="text-base mt-2">{item.date}</p>
                                    </div>
                                    <div className="w-full flex md:justify-center xs:justify-center">
                                        <div className="md:w-full xs:w-full flex justify-end md:flex-row xs:flex-col mt-4">
                                            <a href={item.linkFile} target="_blank" rel="noreferrer" className="flex justify-center items-center md:w-full xs:w-full text-center my-2 border border-black py-1 px-2 rounded-full mr-2">Ver Documento
                                                <Icon
                                                    className="ml-1"
                                                    path={mdiEyeOutline}
                                                    size={1}
                                                    color="black"
                                                /></a>
                                            {
                                                admin === true ? (
                                                    <div id="btn-delete" className="md:w-full xs:w-full flex justify-between items-center gap-1">
                                                        <button onClick={(id) => { BorrarUsuario(item.id) }} className="w-full text-white bg-red-600 py-1 px-2 rounded-full focus:outline-none">Delete</button>
                                                    </div>

                                                ) : (
                                                    <span></span>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))
                    ) : (
                        <span className="w-full my-4 text-gray-400">
                            No hay posts
                        </span>
                    )
                }



            </div >
        </>





    )
}

export default AddPost