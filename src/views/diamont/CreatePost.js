import React, { useState, useEffect } from 'react';
import { auth, store, storage } from '../../firebase'

import Icon from '@mdi/react'
import { mdiEyeOutline } from '@mdi/js'


const CreatePost = () => {

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
                .where('autor', '==', 'tesoreriadiamond@rousecompany.com.co').get()
            
            const nuevoArray = docs.map(item => ({ id: item.id, ...item.data() }))
            setPostUser(nuevoArray)
        }
        getPosts()

    }, [])

    const idContainer = () => {

        auth.onAuthStateChanged((user) => {

            if (user.email === 'tesoreriadiamond@rousecompany.com.co') {
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
            const { docs } = await store.collection('posts')
            .orderBy('date', 'desc')
            .where('autor', '==', 'tesoreriadiamond@rousecompany.com.co').get()
        
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
            const { docs } = await store.collection('posts')
            .orderBy('date', 'desc')
            .where('autor', '==', 'tesoreriadiamond@rousecompany.com.co').get()
            
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
        <div className="flex justify-center items-start lg:flex-row xs:flex-col gap-4">
            {
                admin === true ? (
                    <form id="form-submit" onSubmit={modoedicion ? setUpdate : setPosts} className="lg:w-1/2 sm:w-full xs:w-full border-2 border-gray-200 p-4 rounded-xl" id="form-post">
                        <div>
                            <textarea
                                value={title}
                                onChange={(e) => { setTitle(e.target.value) }}
                                placeholder="Title"
                                autocomplete="off"
                                className="
                            w-full bg-gray-200 
                            py-3 px-6 rounded-xl 
                            text-4xl font-medium 
                            text-gray-800
                            focus:outline-none"
                            />
                        </div>
                        <div className="flex md:flex-row xs:flex-col">
                            <div className="md:w-full xs:w-full progress-panel flex items-center flex-col">
                                <input
                                    value={date}
                                    onChange={(e) => { setDate(e.target.value) }}
                                    type="date"
                                    className="
                            w-full p-3 
                            bg-gray-200 
                            rounded-xl my-2 
                            focus:outline-none"
                                />
                                <div className="w-full flex flex-col p-4">
                                    <input
                                        onChange={(e) => { uploadFile(e.target.value) }}
                                        name="upload-image"
                                        className="file focus:outline-none"
                                        type="file" />
                                </div>
                                {
                                    modoedicion ?
                                        (
                                            <button action="submit"
                                                className="md:w-2/3 xs:w-full bg-black text-white my-4 p-2 rounded-xl md:text-2xl xs:text-xl focus:outline-none">Actualizar</button>
                                        )
                                        :
                                        (
                                            <button action="submit"
                                                className="md:w-2/3 xs:w-full bg-black text-white my-4 p-2 rounded-xl md:text-2xl xs:text-xl focus:outline-none">Publicar</button>
                                        )
                                }
                            </div>
                        </div>
                        <div className="flex justify-center items-center w-full">
                        </div>
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
            <div className="lg:w-1/2 md:w-full flex justify-center items-start lg:flex-row xs:flex-col gap-4">
                <div className="lg:w-full xs:w-full">
                    {
                        postuser.length !== 0 ? (
                            postuser.map(item => (
                                <div className="w-full border-2 border-gray-200 rounded-xl p-4 mb-2 flex justify-between items-center">
                                    <div key={item.id} className="flex justify-center items-start w-full flex-col">
                                        <div className="w-full flex justify-between flex-col">
                                            <p className="text-2xl font-medium">{item.title}</p>
                                            <p className="text-base mt-2">{item.date}</p>
                                        </div>
                                        <div className="w-full flex md:justify-center xs:justify-center">
                                            <div className="md:w-2/3 xs:w-full flex justify-end md:flex-row xs:flex-col mt-4">
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
                </div>
            </div>

        </div>
    )
}

export default CreatePost
