import React from 'react'
import { Link } from 'react-router-dom'

const HeaderClient = () => {
    return (
        <div>
            <header role="banner" className="probootstrap-header">
                <div className="container">
                    <a href="index.html" className="probootstrap-logo">Black<span>.</span></a>
                    <a href="" className="probootstrap-burger-menu visible-xs"><i>Menu</i></a>
                    <div className="mobile-menu-overlay" />
                    <nav role="navigation" className="probootstrap-nav hidden-xs">
                        <ul className="probootstrap-main-nav">
                            <li className=""><Link to={'/'}>
                                Home
                            </Link></li>
                            <li>
                                <Link to={'/products'}>
                                    Projects
                                </Link>
                            </li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                        <ul className="probootstrap-right-nav hidden-xs">
                            <li>
                                <a href=""><Link to={'/signin'}>
                                signin
                                </Link></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>


        </div>
    )
}

export default HeaderClient
