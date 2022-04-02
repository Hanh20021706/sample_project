import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderAdmin from '../../components/HeaderAdmin'
import NavAdmin from '../../components/NavAdmin'



const AdminLayout = () => {
    return (
        <div>
            <header>    
                <HeaderAdmin/>
                <NavAdmin/>
            </header>
           
            
            <main className='main-admin' >
               
                <Outlet />
            </main>
        </div>
    )
}

export default AdminLayout
