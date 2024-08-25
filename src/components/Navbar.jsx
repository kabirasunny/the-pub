import React, { useState } from 'react'
import './Navbar.css'
import { FaCartPlus, FaUserPlus } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [position, setPosition] = useState();
    const [hideicon, setHideIcon] = useState();
    function openCart() {
        setPosition({ width: '250px' })
        setHideIcon({ display: 'flex' })
    }

    function closeCart() {
        setPosition({ width: '0' })
        setHideIcon({ display: 'none' })
    }

    const [signForm, setSignForm] = useState();
    function openForm() {
        setSignForm({ display: 'flex' });
    }

    function closeForm() {
        setSignForm({ display: 'none' });
        setLoginForm({display:'none'});
    }

    const [loginForm, setLoginForm] = useState();
    function openLoginFrom(){
        setSignForm({display:'none'})
        setLoginForm({display:'flex'});
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
                    <p className='icart'><FaUserPlus onClick={openForm} /></p>
                    <p className='icart'><FaCartPlus onClick={openCart} /></p>
                    <div className="cart" style={position}><div className='icon' style={hideicon}><IoIosArrowForward onClick={closeCart} /> Cart</div></div>
                </div>
            </section>
            {/* ====================Section Navbar - End================================= */}
            {/* ====================Section form - Start================================= */}

            <section className="secform" style={signForm}>
                <div className='title-icon'>
                    <h1 className='title'>Sign up</h1>
                    <h1 className='icon'><RxCross1 onClick={closeForm} /></h1>
                </div>
                <form action="">
                    <input type="text" name="fullName" id="" required placeholder='Full Name*' />
                    <input type="text" name="email" id="" required placeholder='Email*' />
                    <input type="tel" name="number" id="" required placeholder='Number*' />
                    <button type='submit' className='btn'>Create Account</button>
                </form>
                <div className="login">
                    <p>Already have an account? <span onClick={openLoginFrom}>Login</span></p>
                </div>
            </section>

            <section className="secform2" style={loginForm}>
                <div className='title-icon2'>
                    <h1 className='title2'>Login</h1>
                    <h1 className='icon2' onClick={closeForm}><RxCross1 /></h1>
                </div>
                <form action="">
                    <input type="tel" name="number" id="" required placeholder='Number*' />
                    <button type='submit' className='btn2'>Send One Time Password</button>
                </form>
            </section>


            {/* ====================Section form - End================================= */}
        </>
    )
}

export default Navbar
