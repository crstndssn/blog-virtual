import React, { Component } from 'react'

export default class Add extends Component {
    render() {
        return (

            <form className="w-full shadow-sm border-2 border-gray-100 p-4 rounded-xl" id="form-post">
                <div>
                    <input id="title-post"
                        className="w-full bg-gray-200 p-4 rounded-md text-4xl font-medium text-gray-800 focus:outline-none" type="text"
                        placeholder="Title" autocomplete="off" />
                </div>
                <div className="flex md:flex-row xs:flex-col">
                    <div className="md:w-full xs:w-full progress-panel flex items-center">
                        <input id="date-post" type="date" className="w-1/3 p-2 bg-gray-200 rounded-full my-5 focus:outline-none" />
                        <div className="w-1/3 flex flex-col p-4">
                            {/* <label className="cursor-pointer border border-black rounded-lg p-1 text-lg my-2" for="input-file">Subir archivo</label> */}
                            <input className="file focus:outline-none" type="file" name="upload image" id="input-file" />
                            {/* <div className="w-full h-3 bg-gray-300 rounded-full mx-5">
                                    <div className="upload-file h-3 bg-green-600 rounded-full"></div>
                                </div> */}
                        </div>

                        <button action="submit"
                            className="md:w-1/3 xs:w-1/2 bg-black text-white my-4 p-3 rounded-full md:text-2xl xs:text-xl focus:outline-none">Publicar</button>
                    </div>
                </div>
                <div className="flex justify-center items-center w-full">
                </div>
            </form>
            
        )
    }
}
