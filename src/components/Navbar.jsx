import React, { useState } from 'react'
import './Navbar.css'
import { FaCartPlus, FaUserPlus } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [position, setPosition] = useState();
    const [hideicon, setHideIcon] = useState();
    function openCart() {
        setPosition({width:'250px'})
        setHideIcon({display:'flex'})
    }

    function closeCart() {
        setPosition({ width: '0' })
        setHideIcon({display:'none'})
    }


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
                    <NavLink to="/order"><li>Order Online</li></NavLink>
                    <NavLink to="/event"><li>Events</li></NavLink>
                    <NavLink to="/about"><li>About Us</li></NavLink>
                    {/* <a href=""><li>Gallary</li></a> */}
                </ul>
                <div className="loginCart">
                    <p href="" className='icart'><FaUserPlus /></p>
                    <p href="" className='icart'><FaCartPlus onClick={openCart} /></p>
                    <div className="cart" style={position}><div className='icon' style={hideicon}><IoIosArrowForward onClick={closeCart} /> Cart</div></div>
                </div>
            </section>
            {/* ====================Section Navbar - End================================= */}
        </>
    )
}

export default Navbar
