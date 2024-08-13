import React from 'react'
import './OrderOnline.css'
import { FaRegCircle } from "react-icons/fa";

const OrderOnline = () => {
    return (
        <>
            {/* ======================backgroundHead Section - start=============================== */}
            <section className="bgHead">
                <img src="./src/image/bgHead.webp" alt="" />
            </section>
            {/* ======================backgroundHead Section - end=============================== */}
            {/* ======================OrderOnline Section - start=============================== */}
            <section className="odrOnlineSection">
                <h1 className="odrTitle">Order Online</h1>
                <p className="odrPara">You can order online! Browse our menu items and choose what you’d like to order from us.</p>
                <p className="odrAccept"><FaRegCircle /> Accepting Orders</p>
                <div className="odrBtn">
                    <button className='btn'>Pickup</button>
                    <button className='btn'>Delivery</button>
                </div>
                <div className="odrPickup">
                    <p className="pickup">Pickup time: <span>up to 30 Minutes</span><button>change</button></p>
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
