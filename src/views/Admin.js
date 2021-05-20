import React from 'react'


import AddUser from '../components/admin/AddUser'
import GetUsers from '../components/admin/GetUsers'

const Admin = () => {
    return (
        <div className="container mx-auto">
            <AddUser/>
            <GetUsers/>
        </div>
    )
}

export default Admin
