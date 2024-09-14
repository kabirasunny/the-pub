import React, { useState } from 'react'
import './Navbar.css'
import { FaCartPlus, FaUserPlus } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { signUp, getUser } from '../services/user-service';
import OrderOnline from './OrderOnline';
import { useForm } from 'react-hook-form';

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

    const { register,
        handleSubmit,
        watch,
        setError,
        formState: { errors } }
        = useForm();

    const [data, setData] = useState({
        fullName: '',
        email: '',
        number: ''
    })

    const handleChanges = (e) => {

        setData({ ...data, [e.target.name]: e.target.value })
    }

    const [regi, setRegi] = useState('');
    const [registerErr, setRegisterErr] = useState('');
    const submit = (e) => {
        signUp(data).then((resp) => {
            if (data.number === '') {
                setRegi("Registration Faild, Please try again");
            } else {
                setRegi("Registration Successful!");
                setRegisterErr('');
            }
        }).catch((error) => {
            setRegisterErr("Registration Faild, Please try again");
            console.log(error);
            console.log("error log");
        })

    }

    const [loginData, setLoginData] = useState('');
    const [fullName, setFullName] = useState();

    const handleChange = (e) => {
        setLoginData(e.target.value);
    }

    const login = (e) => {
        // e.preventDefault();
        const logData = loginData.trim();
        getUser(logData, data).then((data) => {
            setFullName(data.fullName);
            console.log("success login");
        }).catch((error) => {
            setRegisterErr("login faild! Please try again.");
            console.log(error);
            console.log("error login");
        })
    }

    const style = {
        color: 'red'
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
                <form onSubmit={handleSubmit(submit)}>
                    <h2 style={{ color: 'green', fontSize: '20px' }}>{regi}</h2>
                    <input className='inp' type="text" {...register("fname", { pattern: { value: /^[A-Za-z]+$/i, message: "please enter character only" } })} name="fullName" id="" required placeholder='Full Name*' onChange={(e) => handleChanges(e)} />
                    {errors.fname && <div className='red' style={style}> {errors.fname.message}</div>}
                    <input className='inp' type="text" {...register("eemail", { pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "please enter email id only" } })} name="email" id="" required placeholder='Email*' onChange={(e) => handleChanges(e)} />
                    {errors.eemail && <div className='red' style={style}>{errors.eemail.message}</div>}
                    <input className='inp' type="tel" {...register("num", { pattern: { value: /^[0-9\b]+$/i, message: "please enter number only" } })} name="number" id="" required placeholder='Number*' onChange={(e) => handleChanges(e)} />
                    {errors.num && <div className='red' style={style}>{errors.num.message}</div>}
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
                <form onSubmit={handleSubmit(login)}>
                    <h2 style={{ color: 'red', fontSize: '20px' }}>{registerErr}</h2>
                    <input className='inp' type="tel" name="number" id="" required placeholder='Number*' onChange={(e) => handleChange(e)} />
                    <button type='submit' className='btn2'>Send One Time Password</button>
                </form>
            </section>


            {/* ====================Section form - End================================= */}
        </>
    )
}

export default Navbar
