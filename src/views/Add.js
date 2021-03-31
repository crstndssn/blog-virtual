import React, { Component } from 'react'

export default class Add extends Component {
    render() {
        return (
            <div className="flex justify-center items-center flex-col md:px-10 xs:px-0 py-5 min-h-75">
                <form id="form-post">
                    <input id="title-post"
                        className="w-full bg-gray-100 p-4 rounded-md text-4xl font-medium text-gray-800 focus:outline-none" type="text"
                        placeholder="Title" autocomplete="off" />
                    <textarea id="description-post"
                        className="mt-6 bg-gray-100 p-4 rounded-md text-xl font-base text-gray-800 w-full h-32 focus:outline-none"
                        type="text" placeholder="Description"></textarea>
            
                    <input id="date-post" type="date" className="p-2 border border-black rounded my-5" />
                    <div className="progress-panel my-2 flex items-center md:flex-row xs:flex-col">
                        <label className="cursor-pointer border border-black rounded-lg p-2 text-lg my-2" for="input-file">Subir archivo</label>
                        <input className="file" type="file" type="upload" name="upload image" id="input-file" />
                        <div className="w-32 h-3 bg-gray-300 rounded-full mx-5">
                            <div className="upload-file h-3 bg-green-600 rounded-full"></div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-full">
                        <button action="submit"
                            className="md:w-1/3 xs:w-1/2 bg-black text-white my-4 p-3 rounded-2xl md:text-2xl xs:text-xl focus:outline-none">Publicar</button>
                    </div>
                </form>
            </div>
        )
    }
}
