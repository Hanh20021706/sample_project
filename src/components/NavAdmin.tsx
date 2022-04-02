import React from 'react'

const NavAdmin = () => {
    return (
        <div className='sidebar-admin' >
            {/* <h3 className='sidebar-name-admin'>
                My App
            </h3> */}
            <ul className='sidebar-nav-admin'>
                <li>
                    
                    <a href="">
                        Dashboard

                    </a>
                </li>
                <li>
                    <a href="">
                    <i className="fa-solid fa-table-tree" />

                        Category
                    </a>
                </li>
                <li>
                    <a href="">
                       Products
                    </a>
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
