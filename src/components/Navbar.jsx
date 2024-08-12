import React from 'react'
import './Navbar.css'
import { FaCartPlus,FaUserPlus  } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            {/* ====================Section logo - Start================================= */}
            <section className="headLogo">
                <div className="line"><div></div></div>
                <div className="line secondLine"><div></div></div>
                <div className="logo"><span>The Pub</span></div>
                <div className="line secondLine"><div></div></div>
                <div className="line"><div></div></div>
                <div className='logoPara'><p>The best night in town</p></div>
            </section>
            {/* ====================Section logo - End================================= */}
            {/* ====================Section Navbar - Start================================= */}
            <section className="navbar">
                <ul className='navList'>
                    <NavLink to="/"><li>Home</li></NavLink>
                    <NavLink to="/menu"><li>Menu</li></NavLink>
                    <a href=""><li>Order Online</li></a>
                    <a href=""><li>Events</li></a>
                    <a href=""><li>About Us</li></a>
                    <a href=""><li>Gallary</li></a>
                </ul>
                <div className="loginCart">
                    <a href="" className='icart'><FaUserPlus /></a>
                    <a href="" className='icart'><FaCartPlus /></a>
                </div>
            </section>
            {/* ====================Section Navbar - End================================= */}
        </>
    )
}

export default Navbar
