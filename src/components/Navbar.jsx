import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { FaCartPlus, FaUserPlus } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { signUp, getUser, setCard } from '../services/user-service';
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
        setTimeout(() => {
            setRegi('')
        }, 5000)
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
            setRegi(resp);
            setRegisterErr('');
            closeForm();
        }).catch((error) => {
            setRegisterErr("Registration Faild, Please try again");
        })

    }

    const [loginData, setLoginData] = useState('');
    const [fullName, setFullName] = useState();
    const [logIcon, setLogIcon] = useState();
    const [logout, setLogout] = useState({ display: 'none' });

    const handleChange = (e) => {
        setLoginData(e.target.value);
    }

    const login = (e) => {
        const logData = loginData.trim();
        getUser(logData, data).then((data) => {
            localStorage.setItem('user', JSON.stringify(data));
            const userData = JSON.parse(localStorage.getItem('user'));
            if (userData.number === 1020304050) {
                openAdmin();
            } else {
                setFullName(userData.fullName);
                setLogout({ display: 'block' })
                setRegisterErr('');
                closeForm()
                setLogIcon({ display: 'none' })
            }
        }).catch((error) => {

            setRegisterErr("Please register before login !");
            setTimeout(() => {
                setRegisterErr('');
            }, 5000)
            setLogIcon({ display: 'block' })
        })
    }

    const logoutHandle = () => {
        localStorage.clear();
        setFullName('');
        setLogout({ display: 'none' })
        setLogIcon({ display: 'block' })
    }

    function displayLogin() {
        const userData = JSON.parse(localStorage.getItem('user'));
        if (userData === null) {
            setFullName('');
            setLogout({ display: 'none' })
            setLogIcon({ display: 'block' })
        } else {
            setFullName(userData.fullName);
            setLogout({ display: 'block' })
            setLogIcon({ display: 'none' })
        }
    }

    // useEffect(() => {
    //     displayLogin();
    // }, [logoutHandle]);



    const style = {
        color: 'red'
    }
    const [adminHide, setAdminHide] = useState({ display: 'none' });
    const closeAdmin = () => {
        setAdminHide({
            display: 'none'
        })
    }

    const openAdmin = () => {
        setAdminHide({ display: 'block' });
        closeForm();
    }

    const [admin, setAdmin] = useState({
        image: '',
        title: ''
    })

    const changes = (e) => {
        setAdmin({ ...data, [e.target.name]: e.target.value })
    }
    const [admsg, setAdmsg] = useState('');
    const handleAdmin = () => {
        setCard(admin).then((resp) => {
            setAdmsg(resp);
        }).catch((error) => {
            setAdmsg(error);
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
                    <p className='icart' style={logIcon}><FaUserPlus onClick={openForm} /></p>
                    <p className='uName'>{fullName}</p>
                    <p className='uName'><RiLogoutCircleRLine style={logout} onClick={logoutHandle} /></p>

                </div>
                {/* -------------------cartlogin - end---------------------------------------------------------- */}



            </section>
            <h2 style={{ color: 'green', fontSize: '20px', textAlign: 'center', backgroundColor: 'white', width: '50%', margin: '0 auto' }}>{regi}</h2>
            {/* ====================Section Navbar - End================================= */}
            {/* ====================Section form - Start================================= */}

            <section className="secform" style={signForm}>
                <div className='title-icon'>
                    <h1 className='title'>Sign up</h1>
                    <h1 className='icon'><RxCross1 onClick={closeForm} /></h1>
                </div>
                <form onSubmit={handleSubmit(submit)}>
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
                    <button type='submit' className='btn2'>Login</button>
                </form>
            </section>
            {/* ====================Section form - End================================= */}
            {/* ========================Section Admin -start=============================== */}
            <section className="adminSection" style={adminHide}>
                <p><RxCross1 onClick={closeAdmin} /></p>
                <form onSubmit={handleSubmit(handleAdmin)}>
                    <h2>Admin Desktop</h2>
                    <p>{admsg}</p>
                    <input className='inp' type="text" name="image" id="" required placeholder='Image title name*' onChange={(e) => changes(e)} />
                    <input className='inp' type="text" name="title" id="" required placeholder='Image path*' onChange={(e) => changes(e)} />
                    <button type='submit' className='btn2'>Submit</button>
                </form>
            </section>
            {/* ========================Section Admin -end=============================== */}
        </>
    )
}

export default Navbar
