import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderAdmin from '../../components/HeaderAdmin'



const AdminLayout = () => {
    return (
        <div>
            <header>    
                <HeaderAdmin/>
            </header>
            
            <main style={{ border: '1px solid red'  } } >
               
                <Outlet />
            </main>
        </div>
    )
}

export default AdminLayout
