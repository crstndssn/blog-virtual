import React from 'react'

const AddUser = () => {
    return (
        <div className="border rounded-lg shadow py-4 px-10">
            
            <div className="w-full flex justify-center items-center">
                <div className="w-1/3 mr-2">
                   <input className="bg-gray-200 text-xl p-3 my-2 w-full rounded-2xl focus:outline-none px-4" 
                   type="text" 
                   placeholder="nombre" 
                /> 
                </div>
                <div className="w-2/3">
                   <input className="bg-gray-200 text-xl p-3 my-2 w-full rounded-2xl focus:outline-none px-4" 
                   type="email" 
                   placeholder="email" 
                /> 
                </div>
            </div>

            <div className="w-full flex justify-center items-center">
                <div className="w-3/4 mr-2 flex justify-center items-center">
                    <h2 className="text-2xl font-semibold">blogvirtual.co/</h2>
                   <input className="bg-gray-200 text-xl p-2 m-2 w-full rounded-2xl focus:outline-none px-4" 
                   type="text" 
                   placeholder="link" 
                /> 
                </div>
                <div className="w-1/4">
                    <button className="w-full bg-black text-white my-2 p-3 rounded-2xl md:text-2xl xs:text-xl focus:outline-none">Crear</button>
                </div>
            </div>

        </div>
    )
}

export default AddUser
