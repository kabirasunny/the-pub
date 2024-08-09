import React from 'react'
import './Navbar.css'

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
                        <a href=""><li>Home</li></a>
                        <a href=""><li>Menu</li></a>
                        <a href=""><li>Order Online</li></a>
                        <a href=""><li>Events</li></a>
                        <a href=""><li>About Us</li></a>
                        <a href=""><li>Gallary</li></a>
                    </ul>
            </section>
            {/* ====================Section Navbar - End================================= */}
        </>
    )
}

export default Navbar
