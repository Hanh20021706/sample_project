import React from 'react'
import { Link } from 'react-router-dom'

const NavAdmin = () => {
    return (
        <div className='sidebar-admin' >
            {/* <h3 className='sidebar-name-admin'>
                My App
            </h3> */}
            <ul className='sidebar-nav-admin'>
                <li>
                    <Link to={'/admin'}>
                    Dashboard
                    </Link>
                    
                    {/* <a href="">
                        Dashboard

                    </a> */}
                </li>
                <li>
                <Link to={'/admin/categories'}>
                Category
                    </Link>
                   
                </li>
                <li>
                <Link to={'/admin/products'}>
                Products
                    </Link>
                   
                </li>
                <li>
                    <a href="">
                       User
                    </a>
                </li>
            </ul>
        

        </div >
    )
}

export default NavAdmin
