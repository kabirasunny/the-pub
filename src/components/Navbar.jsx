import React, { useState } from 'react'
import './Navbar.css'
import { FaCartPlus, FaUserPlus } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { signUp, getUser } from '../services/user-service';
import OrderOnline from './OrderOnline';

const Navbar = () => {

    const [signForm, setSignForm] = useState();
    function openForm() {
        setSignForm({ display: 'flex' });
    }

    function closeForm() {
        setSignForm({ display: 'none' });
        setLoginForm({ display: 'none' });
    }

    const [loginForm, setLoginForm] = useState();
    function openLoginFrom() {
        setSignForm({ display: 'none' })
        setLoginForm({ display: 'flex' });
    }
    const [data, setData] = useState({
        fullName: '',
        email: '',
        number: ''
    })

    const handleChanges = (e) => {

        setData({ ...data, [e.target.name]: e.target.value })
    }

    const submit = (e) => {
        e.preventDefault();
        console.log(data);


        signUp(data).then((resp) => {
            console.log(resp);
            console.log("success log");
        }).catch((error) => {
            console.log(error);
            console.log("error log");
        })

    }

    const [loginData, setLoginData] = useState('');
    const [user,setUser] = useState();
    const [fullName, setFullName] = useState();

    const handleChange = (e) => {
        setLoginData(e.target.value);
    }

    const login = (e) => {
        e.preventDefault();
        const logData = loginData.trim();
        getUser(logData, data).then((data) => {
            localStorage.setItem('user', JSON.stringify(data));
            const storedUser = localStorage.getItem('user');
            if(storedUser){
                setUser(JSON.parse(storedUser));
            }
            setFullName(user.fullName);
            console.log("success login");
        }).catch((error) => {
            console.log(error);
            console.log("error login");
        })
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
                

                {/* -------------------cartlogin - start---------------------------------------------------------- */}
                <div className="loginCart">
                    <p className='icart'><FaUserPlus onClick={openForm} /></p>
                    <p className='uName'>{fullName}</p>
                </div>
                {/* -------------------cartlogin - end---------------------------------------------------------- */}



            </section>
            {/* ====================Section Navbar - End================================= */}
            {/* ====================Section form - Start================================= */}

            <section className="secform" style={signForm}>
                <div className='title-icon'>
                    <h1 className='title'>Sign up</h1>
                    <h1 className='icon'><RxCross1 onClick={closeForm} /></h1>
                </div>
                <form onSubmit={submit}>
                    <input className='inp' type="text" name="fullName" id="" required placeholder='Full Name*' onChange={(e) => handleChanges(e)} />
                    <input className='inp' type="text" name="email" id="" required placeholder='Email*' onChange={(e) => handleChanges(e)} />
                    <input className='inp' type="tel" name="number" id="" required placeholder='Number*' onChange={(e) => handleChanges(e)} />
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
                <form onSubmit={login}>
                    <input className='inp' type="tel" name="number" id="" required placeholder='Number*' onChange={(e) => handleChange(e)} />
                    <button type='submit' className='btn2'>Send One Time Password</button>
                </form>
            </section>


            {/* ====================Section form - End================================= */}
        </>
    )
}

export default Navbar
