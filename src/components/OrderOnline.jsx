import React, { useState } from 'react'
import './OrderOnline.css'
import { FaRegCircle, FaTruckPickup } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { FaCartPlus } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const OrderOnline = () => {

    const [position, setPosition] = useState();
    const [hideicon, setHideIcon] = useState();
    function openCart() {
        setPosition({ width: '350px' })
        setHideIcon({ display: 'flex' })
    }

    function closeCart() {
        setPosition({ width: '0' })
        setHideIcon({ display: 'none' })
    }

    const [quantity, setQuantity] = useState(1);
    const [amount, setAmount] = useState();

    function handleDec() {
        let num = quantity - 1;
        setQuantity(num);
        let am = amount - 100;
        setAmount(am)

    }

    function handleInc() {
        let num = quantity + 1;
        setQuantity(num);
        let am = 100 * num;
        setAmount(am);
    }

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

    const [acdHide, setAcdHide] = useState();
    const [src, setSrc] = useState();
    const [cdTitle, setCdTitle] = useState();
    const [cdPara, setCdPara] = useState();
    const [cdPrice, setCdPrice] = useState();

    function addCardHandle(e) {
        setAcdHide({ display: 'block' });
        const number = document.getElementsByClassName("number")[5].textContent;
        // const number = document.getElementById("number0").textContent;
        const cdNumber = parseInt(number);
        console.log(cdNumber);

        const cdImage = document.getElementsByClassName("cardImg")[cdNumber];
        const cdSrc = cdImage.getAttribute("src");
        const cdTitle = document.getElementsByClassName("cardTitle")[cdNumber].textContent;
        const cdPara = document.getElementsByClassName("cardPara")[cdNumber].textContent;
        const price = document.getElementsByClassName("cardPrice")[cdNumber].textContent;
        const cdPrice = parseInt(price);

        setSrc(cdSrc);
        setCdTitle(cdTitle);
        setCdPara(cdPara);
        setCdPrice(cdPrice);
    }

    function closeAddCardHandle() {
        setAcdHide({ display: 'none' });
    }

    return (
        <>
            {/* ======================backgroundHead Section - start=============================== */}
            <section className="bgHead" >
                <img src="./src/image/bgHead.webp" alt="" />
            </section>
            {/* ======================backgroundHead Section - end=============================== */}



            <section className="odrOnlineSection" >
                <div className='titleCart'>
                    <h1 className='odrTitle'>Order Online Coming Soon!</h1>
                </div>
            </section>
            {/* ======================OrderOnline Section - start=============================== */}
            {/* <section className="odrOnlineSection" > */}
            {/* <div className='titleCart'>
                    <h1 className='odrTitle'>Order Online</h1>
                    <p className='icart odrTitle'><FaCartPlus onClick={openCart} /></p>
                </div>


                <div className="cart" style={position}>
                    <div className='icon' style={hideicon}><IoIosArrowForward onClick={closeCart} /> Cart</div>
                    <div className="cartInfo">
                        <div className="fdList">
                            <img src={src} alt="" />
                            <h2 className="imgTitle">{cdTitle}</h2>
                            <p className="price"><i className="fa-solid fa-rupee-sign"></i> {cdPrice}</p>
                            <p className="btn"><span onClick={handleDec}>-</span>{quantity}<span onClick={handleInc}>+</span></p>
                        </div>
                        <div className="line"><div></div></div>
                        <div className="totalAm">
                            <p>Sub Total : <span>{amount}</span></p>
                        </div>
                        <div className="promoBtn">
                            <a href="">Promo code</a>
                            <button className='pbBtn'>Pay now</button>
                        </div>
                    </div>
                </div>


                <p className="odrPara">You can order online! Browse our menu items and choose what you’d like to order from us.</p>
                <p className="odrAccept"><FaRegCircle style={{ display: 'none' }} /><i className="fa-solid fa-circle"></i> Accepting Orders</p>
                <div className="odrBtn">
                    <button className='btn' onClick={openHandle}>Pickup</button>
                    <button className='btn' onClick={openHandle}>Delivery</button>
                </div> */}

            {/* ----------------------------------------------------------------------------------------- */}
            {/* <div className="pickupDelivery" style={dis}>
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
                </div> */}

            {/* ----------------------------------------------------------------------------------------- */}

            {/* <div className="odrPickup">
                    <p className="pickup">Pickup time: <span>{value}</span><button onClick={openHandle}>change</button></p>
                    <p className="address">Pickup address: USA ,CA</p>
                </div>
                <div className="odrLine"><div></div></div>
            </section> */}
            {/* ======================OrderOnline Section - end=============================== */}



            {/* ======================OrderMenu Section - start=============================== */}
            {/* <section className="odrMenuSection">
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
                    <div className="card" onClick={addCardHandle}>
                        <p className="number" id="number0" >0</p>
                        <img src="./src/image/beetrootSaladOnline.webp" alt="" className="cardImg" />
                        <h1 className="cardTitle">Beetroot Salad</h1>
                        <p className="cardPrice"><i className="fa-solid fa-rupee-sign"></i> 99</p>
                    </div>

                    <div className="card" onClick={addCardHandle}>
                        <p className="number" id="number1">1</p>
                        <img src="./src/image/mixSaladOnline.webp" alt="" className="cardImg" />
                        <h1 className="cardTitle">Mixed Salad</h1>
                        <p className="cardPrice"><i className="fa-solid fa-rupee-sign"></i> 120</p>
                    </div>

                    <div className="card" onClick={addCardHandle}>
                        <p className="number" id="number2">2</p>
                        <img src="./src/image/shrimpSaladOnline.webp" alt="" className="cardImg" />
                        <h1 className="cardTitle">Shrimp Salad</h1>
                        <p className="cardPrice"><i className="fa-solid fa-rupee-sign"></i> 150</p>
                    </div>

                    <div className="card" onClick={addCardHandle}>
                        <p className="number" id="number3">3</p>
                        <img src="./src/image/nuchosOnline.webp" alt="" className="cardImg" />
                        <h1 className="cardTitle">Nuchos</h1>
                        <p className="cardPrice"><i className="fa-solid fa-rupee-sign"></i> 110</p>
                    </div>

                    <div className="card" onClick={addCardHandle}>
                        <p className="number" id="number4">4</p>
                        <img src="./src/image/potatoWedgesOnline.webp" alt="" className="cardImg" />
                        <h1 className="cardTitle">Potato Wedges</h1>
                        <p className="cardPrice"><i className="fa-solid fa-rupee-sign"></i> 99</p>
                    </div>

                    <div className="card" onClick={addCardHandle}>
                        <p className="number" id="number5">5</p>
                        <img src="./src/image/potatoBoatsOnline.webp" alt="" className="cardImg" />
                        <h1 className="cardTitle">Potato Boat</h1>
                        <p className="cardPrice"><i className="fa-solid fa-rupee-sign"></i> 100</p>
                    </div>
                </div>

                <div className="odrLine"><div></div></div>
                <h1 className="odrMTitle" id='cdMains' >Mains</h1>
                <p className="odrMPara">I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.</p>
                <div className="mainsCards">
                    <div className="card" onClick={addCardHandle}>
                        <p className="number" id="number6">6</p>
                        <img src="./src/image/pizzaMargitaOnline.webp" alt="" className="cardImg" />
                        <h1 className="cardTitle">Pizza Margita</h1>
                        <p className="cardPrice"><i className="fa-solid fa-rupee-sign"></i> 300</p>
                    </div>

                    <div className="card" onClick={addCardHandle}>
                        <p className="number" id="number7">7</p>
                        <img src="./src/image/chickenSandwichOnline.webp" alt="" className="cardImg" />
                        <h1 className="cardTitle">Chicken Sandwich</h1>
                        <p className="cardPrice"><i className="fa-solid fa-rupee-sign"></i> 200</p>
                    </div>

                    <div className="card" onClick={addCardHandle}>
                        <p className="number" id="number8">8</p>
                        <img src="./src/image/beefBurgerOnline.webp" alt="" className="cardImg" />
                        <h1 className="cardTitle">Chicken Burger</h1>
                        <p className="cardPrice"><i className="fa-solid fa-rupee-sign"></i> 189</p>
                    </div>

                    <div className="card" onClick={addCardHandle}>
                        <p className="number" id="number9">9</p>
                        <img src="./src/image/vegetarianBurgerOnline.webp" alt="" className="cardImg" />
                        <h1 className="cardTitle">Vegetarian Burger</h1>
                        <p className="cardPrice"><i className="fa-solid fa-rupee-sign"></i> 99</p>
                    </div>

                    <div className="card" onClick={addCardHandle}>
                        <p className="number" id="number10">10</p>
                        <img src="./src/image/steakOnline.webp" alt="" className="cardImg" />
                        <h1 className="cardTitle">Steak</h1>
                        <p className="cardPrice"><i className="fa-solid fa-rupee-sign"></i> 99</p>
                    </div>

                    <div className="card" onClick={addCardHandle}>
                        <p className="number" id="number11">11</p>
                        <img src="./src/image/fishChipsOnline.webp" alt="" className="cardImg" />
                        <h1 className="cardTitle">Fish & Chips</h1>
                        <p className="cardPrice"><i className="fa-solid fa-rupee-sign"></i> 160</p>
                    </div>
                </div> */}

            {/* -------------addCard---------------------------------  */}
            {/* <div className="addCard" style={acdHide}>
                    <p className="acdIcon" onClick={closeAddCardHandle}><RxCross1 /></p>
                    <img src={src} alt="" />
                    <h1 className="aCardTitle">{cdTitle}</h1>
                    <p className="aCardPara">{cdPara}</p>
                    <button className='aCardBtn'>Add Now | {cdPrice}</button>
                </div> */}
            {/* -------------addCard--------------------------------- */}


            {/* <div className="odrLine"><div></div></div>
            </section> */}
            {/* ======================OrderMenu Section - end=============================== */}
        </>
    )
}

export default OrderOnline
