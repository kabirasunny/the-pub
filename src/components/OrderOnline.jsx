import React, { useState } from 'react'
import './OrderOnline.css'
import { FaRegCircle, FaTruckPickup } from "react-icons/fa";

const OrderOnline = () => {
    const [dis, setDis] = useState();

    function openHandle() {
        setDis({ display: 'block' })
        setHide({ display: 'block' });
        setDeliHide({ display: 'none' });
    }

    function closeHandle() {
        setDis({ display: 'none' })
        setBlu();
    }

    const [show, setShow] = useState();
    function showOpen() {
        setShow({ display: 'block' })
    }

    function showClose() {
        setShow()
    }

    const [value, setValue] = useState('up to 30 Minutes')
    function handleChange(e) {
        setValue(e.target.value);
    }

    const [deliHide, setDeliHide] = useState()
    const [hide, setHide] = useState();
    function deliOpenHandle() {
        setDeliHide({ display: 'block' });
        setHide({ display: 'none' });
    }

    return (
        <>
            {/* ======================backgroundHead Section - start=============================== */}
            <section className="bgHead" >
                <img src="./src/image/bgHead.webp" alt="" />
            </section>
            {/* ======================backgroundHead Section - end=============================== */}
            {/* ======================OrderOnline Section - start=============================== */}
            <section className="odrOnlineSection" >
                <h1 className="odrTitle">Order Online</h1>
                <p className="odrPara">You can order online! Browse our menu items and choose what you’d like to order from us.</p>
                <p className="odrAccept"><FaRegCircle style={{ display: 'none' }} /><i className="fa-solid fa-circle"></i> Accepting Orders</p>
                <div className="odrBtn">
                    <button className='btn' onClick={openHandle}>Pickup</button>
                    <button className='btn' onClick={deliOpenHandle}>Delivery</button>
                </div>

                {/* ----------------------------------------------------------------------------------------- */}
                <div className="pickupDelivery" style={dis}>
                    <i className="fa-solid fa-xmark" onClick={closeHandle}></i>
                    <h1>How would you like to receive your order ?</h1>
                    <div className="pdBtn">
                        <button className='btn' onClick={openHandle}>Pickup</button>
                        <button className='btn' onClick={deliOpenHandle}>Delivery</button>
                    </div>
                    <div className="pdDiv" style={hide}>
                        <small >Pickup from:</small>
                        <p >an Francisco, CA, USA</p>
                        <small >When:</small>
                    </div>
                    <form action="">
                        <div className="delivery" style={deliHide}>
                            <label className='dLabel' htmlFor="delivery">delivery to:</label><br />
                            <input className='dInput' type="text" name="" id="" /><br />
                        </div>
                        <div className="radioDiv" style={hide}>
                            <input type="radio" name="btn" onChange={handleChange} id="minutes" value="up to 30 Minutes" onClick={showClose} />
                            <label htmlFor='minutes'>up to 30 Minutes</label><br />
                            <input type="radio" name="btn" id="later" value="Schedule for later" onClick={showOpen} />
                            <label htmlFor="later">Schedule for later</label>
                        </div>
                        <div className="dtBtn" style={show}>
                            <label className='dtlabel' htmlFor="">Date: </label>
                            <div>Today</div>
                            <label className='dtlabel' htmlFor="time">Time: </label>
                            <select value={value} name="" id="time" onChange={handleChange}>
                                <option value="Today 9:30 PM">Today 9:30 PM</option>
                                <option value="Today 9:45 PM">Today 9:45 PM</option>
                                <option value="Today 10:00 PM">Today 10:00 PM</option>
                                <option value="Today 10:15 PM">Today 10:15 PM</option>
                                <option value="Today 10:30 PM">Today 10:30 PM</option>
                                <option value="Today 10:45 PM">Today 10:45 PM</option>
                            </select>
                        </div><br />
                        <button type='submit'>Save</button>
                    </form>
                </div>

                {/* ----------------------------------------------------------------------------------------- */}

                <div className="odrPickup">
                    <p className="pickup">Pickup time: <span>{value}</span><button onClick={openHandle}>change</button></p>
                    <p className="address">Pickup address: USA ,CA</p>
                </div>
                <div className="odrLine"><div></div></div>
            </section>
            {/* ======================OrderOnline Section - end=============================== */}
            {/* ======================OrderMenu Section - start=============================== */}
            <section className="odrMenuSection">
                <div className="odrMenu">
                    <div className="selectMenu">
                        <a href="#cdApp">Appetizers</a>
                        <a href="#cdMains">Mains</a>
                    </div>
                    <h1 className="odrMenu">Lunch Menu</h1>
                    <p className="odrMenuTime">Served daily between 12-5pm</p>
                    <div className="odrLine"><div></div></div>
                    <h1 className="odrMTitle" id='cdApp' >Appetizers</h1>
                    <p className="odrMPara">I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.</p>
                </div>
                <div className="odrMenuCards">
                    <div className="card">
                        <img src="./src/image/beetrootSaladOnline.webp" alt="" />
                        <h1 className="cardTitle">Beetroot Salad</h1>
                        <p className="cardPara">I’m a dish description. Click “Edit Menu” to open the Restaurant Menu </p>
                        <p className="cardPrice">100</p>
                    </div>

                    <div className="card">
                        <img src="./src/image/mixSaladOnline.webp" alt="" />
                        <h1 className="cardTitle">Mixed Salad</h1>
                        <p className="cardPara">I’m a dish description. Click “Edit Menu” to open the Restaurant Menu </p>
                        <p className="cardPrice">100</p>
                    </div>

                    <div className="card">
                        <img src="./src/image/shrimpSaladOnline.webp" alt="" />
                        <h1 className="cardTitle">Shrimp Salad</h1>
                        <p className="cardPara">I’m a dish description. Click “Edit Menu” to open the Restaurant Menu </p>
                        <p className="cardPrice">100</p>
                    </div>

                    <div className="card">
                        <img src="./src/image/nuchosOnline.webp" alt="" />
                        <h1 className="cardTitle">Nuchos</h1>
                        <p className="cardPara">I’m a dish description. Click “Edit Menu” to open the Restaurant Menu </p>
                        <p className="cardPrice">100</p>
                    </div>

                    <div className="card">
                        <img src="./src/image/potatoWedgesOnline.webp" alt="" />
                        <h1 className="cardTitle">Potato Wedges</h1>
                        <p className="cardPara">I’m a dish description. Click “Edit Menu” to open the Restaurant Menu </p>
                        <p className="cardPrice">100</p>
                    </div>

                    <div className="card">
                        <img src="./src/image/potatoBoatsOnline.webp" alt="" />
                        <h1 className="cardTitle">Potato Boat</h1>
                        <p className="cardPara">I’m a dish description. Click “Edit Menu” to open the Restaurant Menu </p>
                        <p className="cardPrice">100</p>
                    </div>
                </div>

                <div className="odrLine"><div></div></div>
                <h1 className="odrMTitle" id='cdMains' >Mains</h1>
                <p className="odrMPara">I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.</p>
                <div className="mainsCards">
                    <div className="card">
                        <img src="./src/image/pizzaMargitaOnline.webp" alt="" />
                        <h1 className="cardTitle">Pizza Margita</h1>
                        <p className="cardPara">I’m a dish description. Click “Edit Menu” to open the Restaurant Menu </p>
                        <p className="cardPrice">100</p>
                    </div>

                    <div className="card">
                        <img src="./src/image/chickenSandwichOnline.webp" alt="" />
                        <h1 className="cardTitle">Chicken Sandwich</h1>
                        <p className="cardPara">I’m a dish description. Click “Edit Menu” to open the Restaurant Menu </p>
                        <p className="cardPrice">100</p>
                    </div>

                    <div className="card">
                        <img src="./src/image/beefBurgerOnline.webp" alt="" />
                        <h1 className="cardTitle">Beef Burger</h1>
                        <p className="cardPara">I’m a dish description. Click “Edit Menu” to open the Restaurant Menu </p>
                        <p className="cardPrice">100</p>
                    </div>

                    <div className="card">
                        <img src="./src/image/vegetarianBurgerOnline.webp" alt="" />
                        <h1 className="cardTitle">Vegetarian Burger</h1>
                        <p className="cardPara">I’m a dish description. Click “Edit Menu” to open the Restaurant Menu </p>
                        <p className="cardPrice">100</p>
                    </div>

                    <div className="card">
                        <img src="./src/image/steakOnline.webp" alt="" />
                        <h1 className="cardTitle">Steak</h1>
                        <p className="cardPara">I’m a dish description. Click “Edit Menu” to open the Restaurant Menu </p>
                        <p className="cardPrice">100</p>
                    </div>

                    <div className="card">
                        <img src="./src/image/fishChipsOnline.webp" alt="" />
                        <h1 className="cardTitle">Fish & Chips</h1>
                        <p className="cardPara">I’m a dish description. Click “Edit Menu” to open the Restaurant Menu </p>
                        <p className="cardPrice">100</p>
                    </div>
                </div>
                <div className="odrLine"><div></div></div>
            </section>


            {/* ======================OrderMenu Section - end=============================== */}
        </>
    )
}

export default OrderOnline
