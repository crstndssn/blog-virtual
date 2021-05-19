import React from 'react'


import AddUser from '../components/admin/AddUser'
import GetUsers from '../components/admin/GetUsers'

const Admin = () => {
    return (
        <div className="container mx-auto mt-7">
            <div className="my-2">
                <h1 className="text-3xl font-semibold">Dashboard</h1>
            </div>
            <AddUser/>
            <GetUsers/>
        </div>
    )
}

export default Admin
