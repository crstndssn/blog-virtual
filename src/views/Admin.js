import React from 'react'

import Navigation from '../components/Navigation'

import AddUser from '../components/admin/AddUser'
import GetUsers from '../components/admin/GetUsers'

const Admin = () => {
    return (
        <>
            <Navigation/>
            <div className="container mx-auto">
                <AddUser />
                <GetUsers />
            </div>
        </>

    )
}

export default Admin
