import React, { useState, useEffect } from 'react';
import { store } from '../firebase'


const CreatePost = () => {

    const [modoedicion, setModoEdicion] = useState(null)
    const [idusuario, setIdUsuario] = useState('')

    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [linkFile, setLinkFile] = useState('')
    const [error, setError] = useState('')
    const [postuser, setPostUser] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            const { docs } = await store.collection('posts').get()
            const nuevoArray = docs.map(item => ({ id: item.id, ...item.data() }))
            setPostUser(nuevoArray)
        }
        getPosts()
    }, [])

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
            linkFile: linkFile
        }


        try {
            const data = await store.collection('posts').add(post)
            const { docs } = await store.collection('posts').get()
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
            const { docs } = await store.collection('posts').get()
            const nuevoArray = docs.map(item => ({ id: item.id, ...item.data() }))
            setPostUser(nuevoArray)
        } catch (e) {
            console.log(e)
        }
    }

    const PulsarActualizar = async (id) => {
        try {
            const data = await store.collection('posts').doc(id).get()
            const { title, date } = data.data()
            setTitle(title)
            setDate(date)
            setIdUsuario(id)
            setModoEdicion(true)
            console.log(id)
        } catch (e) {
            console.log(e)
        }
    }

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

    const uploadFile = () => {
        console.log('helo')


    }

    return (
        <div className="flex justify-center items-start md:flex-row xs:flex-col gap-4">
            <form onSubmit={modoedicion ? setUpdate : setPosts} className="md:w-1/2 xs:w-full border-2 border-gray-200 p-4 rounded-xl" id="form-post">
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

                            {/* <label className="cursor-pointer border border-black rounded-lg p-1 text-lg my-2" for="input-file">Subir archivo</label> */}

                            <input
                                value={linkFile}
                                className="file focus:outline-none" type="file" onChange={uploadFile} />

                            {/* <div className="w-full h-3 bg-gray-300 rounded-full mx-5">
                            <div className="upload-file h-3 bg-green-600 rounded-full"></div>
                        </div> */}

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
                                <p>{error}</p>
                            </div>
                        )
                        :
                        (
                            <span></span>
                        )
                }
            </form>
            <div className="md:w-1/2 xs:w-full">
                {
                    postuser.length !== 0 ? (
                        postuser.map(item => (
                            <div className="w-full border-2 border-gray-200 rounded-xl p-4 mb-2 flex justify-between items-center">
                                <div key={item.id} className="flex justify-center items-start w-full flex-col">
                                    <p className="text-2xl font-medium">{item.title}</p>
                                    <p className="text-base">{item.date}</p>
                                    <p className="text-xl font-semibold"></p>
                                    <div className="w-full flex justify-between mt-8 md:flex-row xs:flex-col">
                                        <a download={item.title} href={item.linkFile} target="_blank" className="md:w-1/3 xs:w-full text-center my-2 border border-black py-1 px-2 rounded-full">ver documento</a>
                                        <div className="md:w-1/3 xs:w-full flex justify-between items-center gap-1">
                                            <button onClick={(id) => { PulsarActualizar(item.id) }} className="w-full text-white bg-black py-1 px-2 rounded-full focus:outline-none">edit</button>
                                            <button onClick={(id) => { BorrarUsuario(item.id) }} className="w-full text-white bg-red-600 py-1 px-2 rounded-full focus:outline-none">delete</button>
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
    )
}

export default CreatePost
