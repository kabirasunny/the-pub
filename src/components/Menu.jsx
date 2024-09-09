import React, { useState } from 'react'
import './Menu.css'

const Menu = () => {

    const [odrName, setOdrName] = useState('');
    const [odrPrice, setOdrPrice] = useState();
    const [quantity, setQuantity] = useState(1);

    function handleInc(){
        let quant = quantity+1;
    }

    function handleDec(){
        let quant = quantity-1;
    }

    function handleAdd() {
        let num = document.getElementsByClassName("value")[0].textContent;
        num =parseInt(num);
        let name = document.getElementsByClassName("cdTitle")[num].textContent;
        let price = document.getElementsByClassName("cdPrice")[num].textContent;
        setOdrName(name);
        setOdrPrice(price);
    }
    function handleAdd2() {
        let num = document.getElementsByClassName("value")[1].textContent;
        num =parseInt(num);
        let name = document.getElementsByClassName("cdTitle")[num].textContent;
        let price = document.getElementsByClassName("cdPrice")[num].textContent;
        setOdrName(name);
        setOdrPrice(price);
    }
    function handleAdd3() {
        let num = document.getElementsByClassName("value")[2].textContent;
        num =parseInt(num);
        let name = document.getElementsByClassName("cdTitle")[num].textContent;
        let price = document.getElementsByClassName("cdPrice")[num].textContent;
        setOdrName(name);
        setOdrPrice(price);
    }
    function handleAdd4() {
        let num = document.getElementsByClassName("value")[3].textContent;
        num =parseInt(num);
        let name = document.getElementsByClassName("cdTitle")[num].textContent;
        let price = document.getElementsByClassName("cdPrice")[num].textContent;
        setOdrName(name);
        setOdrPrice(price);
    }
    function handleAdd5() {
        let num = document.getElementsByClassName("value")[4].textContent;
        num =parseInt(num);
        let name = document.getElementsByClassName("cdTitle")[num].textContent;
        let price = document.getElementsByClassName("cdPrice")[num].textContent;
        setOdrName(name);
        setOdrPrice(price);
    }
    function handleAdd6() {
        let num = document.getElementsByClassName("value")[5].textContent;
        num =parseInt(num);
        let name = document.getElementsByClassName("cdTitle")[num].textContent;
        let price = document.getElementsByClassName("cdPrice")[num].textContent;
        setOdrName(name);
        setOdrPrice(price);
    }
    function handleAdd7() {
        let num = document.getElementsByClassName("value")[6].textContent;
        num =parseInt(num);
        let name = document.getElementsByClassName("cdTitle")[num].textContent;
        let price = document.getElementsByClassName("cdPrice")[num].textContent;
        setOdrName(name);
        setOdrPrice(price);
    }
    function handleAdd8() {
        let num = document.getElementsByClassName("value")[7].textContent;
        num =parseInt(num);
        let name = document.getElementsByClassName("cdTitle")[num].textContent;
        let price = document.getElementsByClassName("cdPrice")[num].textContent;
        setOdrName(name);
        setOdrPrice(price);
    }
    function handleAdd9() {
        let num = document.getElementsByClassName("value")[8].textContent;
        num =parseInt(num);
        let name = document.getElementsByClassName("cdTitle")[num].textContent;
        let price = document.getElementsByClassName("cdPrice")[num].textContent;
        setOdrName(name);
        setOdrPrice(price);
    }
    function handleAdd10() {
        let num = document.getElementsByClassName("value")[9].textContent;
        num =parseInt(num);
        let name = document.getElementsByClassName("cdTitle")[num].textContent;
        let price = document.getElementsByClassName("cdPrice")[num].textContent;
        setOdrName(name);
        setOdrPrice(price);
    }

    function handleAdd11() {
        let num = document.getElementsByClassName("value")[10].textContent;
        num =parseInt(num);
        let name = document.getElementsByClassName("cdTitle")[num].textContent;
        let price = document.getElementsByClassName("cdPrice")[num].textContent;
        setOdrName(name);
        setOdrPrice(price);
    }

    function handleAdd12() {
        let num = document.getElementsByClassName("value")[11].textContent;
        num =parseInt(num);
        let name = document.getElementsByClassName("cdTitle")[num].textContent;
        let price = document.getElementsByClassName("cdPrice")[num].textContent;
        setOdrName(name);
        setOdrPrice(price);
    }

    const [cart, setCart] = useState();
    function openCart() {
        console.log("hello")
        setCart({ display: 'block'});
    }

    return (
        <>
            {/* ========================lunchMenu Section- Start============================ */}
            <section className="lunchMenu">
                <div className="lunchMenuBox">
                    <h1 className="lmTitle">Menu</h1>
                    <h3 className="subTitle">Lunch Menu</h3>
                    <p className="subTlPara">Serve daily between 12-5pm </p>
                    <h2>Appetizers</h2>
                    <p className="lmDesc">I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text. <span onClick={openCart} style={{ color: 'green', fontSize: '25px' }}>Cart</span></p>
                </div>

                <div className="lunchMenuCardBox">
                    <div className="lunchMenuCards">
                        <img src="./src/image/beetrootSalad.webp" alt="" />
                        <h1 className="cdTitle">BEETROOT SALAD</h1>
                        <p className='value' style={{display:'none'}}>0</p>
                        <p className="cdPrice"><i className="fa-solid fa-rupee-sign"></i> 99</p>
                        <button className='bt' onClick={handleAdd}>Add Now</button>
                    </div>
                    <div className="lunchMenuCards">
                        <img src="./src/image/mixSalad.webp" alt="" />
                        <h1 className="cdTitle">MIXED SALAD</h1>
                        <p className='value' style={{display:'none'}}>1</p>
                        <p className="cdPrice"><i className="fa-solid fa-rupee-sign"></i> 120</p>
                        <button className='bt' onClick={handleAdd2}>Add Now</button>
                    </div>
                    <div className="lunchMenuCards">
                        <img src="./src/image/ShrimpSalad.webp" alt="" />
                        <h1 className="cdTitle">★ SHRIMP SALAD</h1>
                        <p className='value' style={{display:'none'}}>2</p>
                        <p className="cdPrice"><i className="fa-solid fa-rupee-sign"></i> 150</p>
                        <button className='bt' onClick={handleAdd3}>Add Now</button>
                    </div>
                    <div className="lunchMenuCards">
                        <img src="./src/image/nuchos.webp" alt="" />
                        <h1 className="cdTitle">NUCHOS</h1>
                        <p className='value' style={{display:'none'}}>3</p>
                        <p className="cdPrice"><i className="fa-solid fa-rupee-sign"></i> 110</p>
                        <button className='bt' onClick={handleAdd4}>Add Now</button>
                    </div>
                    <div className="lunchMenuCards">
                        <img src="./src/image/potatoWedges.webp" alt="" />
                        <h1 className="cdTitle">POTATO WEDGES</h1>
                        <p className='value' style={{display:'none'}}>4</p>
                        <p className="cdPrice"><i className="fa-solid fa-rupee-sign"></i> 99</p>
                        <button className='bt' onClick={handleAdd5}>Add Now</button>
                    </div>
                    <div className="lunchMenuCards">
                        <img src="./src/image/potatoBoats.webp" alt="" />
                        <h1 className="cdTitle">POTATO BOATS</h1>
                        <p className='value' style={{display:'none'}}>5</p>
                        <p className="cdPrice"><i className="fa-solid fa-rupee-sign"></i> 100</p>
                        <button className='bt' onClick={handleAdd6}>Add Now</button>
                    </div>
                </div>
            </section>
            {/* ========================lunchMenu Section- end============================ */}
            {/* ========================mains Section- Start============================ */}
            <section className='mainsSection'>
                <div className="mainsDetails">
                    <h1 className="mTitle">Mains</h1>
                    <p className="mPara">I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.
                    </p>
                </div>

                <div className="mCards">
                    <div className="cards">
                        <img src="./src/image/pizzaMargita.webp" alt="" />
                        <h1 className="cdTitle">PIZZA MARGHRITA</h1>
                        <p className='value' style={{display:'none'}}>6</p>
                        <p className="cdPrice"><i className="fa-solid fa-rupee-sign"></i> 300</p>
                        <button className='bt' onClick={handleAdd7}>Add Now</button>
                    </div>
                    <div className="cards">
                        <img src="./src/image/chickenSandwich.webp" alt="" />
                        <h1 className="cdTitle">CHICKEN SANDWICH</h1>
                        <p className='value' style={{display:'none'}}>7</p>
                        <p className="cdPrice"><i className="fa-solid fa-rupee-sign"></i> 200</p>
                        <button className='bt' onClick={handleAdd8}>Add Now</button>
                    </div>
                    <div className="cards">
                        <img src="./src/image/beefBurger.webp" alt="" />
                        <h1 className="cdTitle">CHICKEN BURGER</h1>
                        <p className='value' style={{display:'none'}}>8</p>
                        <p className="cdPrice"><i className="fa-solid fa-rupee-sign"></i> 189</p>
                        <button className='bt' onClick={handleAdd9}>Add Now</button>
                    </div>

                    <div className="cards">
                        <img src="./src/image/VegBurger.webp" alt="" />
                        <h1 className="cdTitle">VEGETARIAN BURGER</h1>
                        <p className='value' style={{display:'none'}}>9</p>
                        <p className="cdPrice"><i className="fa-solid fa-rupee-sign"></i> 99</p>
                        <button className='bt' onClick={handleAdd10}>Add Now</button>
                    </div>
                    <div className="cards">
                        <img src="./src/image/stick.webp" alt="" />
                        <h1 className="cdTitle">★ STEAK</h1>
                        <p className='value' style={{display:'none'}}>10</p>
                        <p className="cdPrice"><i className="fa-solid fa-rupee-sign"></i> 99</p>
                        <button className='bt' onClick={handleAdd11}>Add Now</button>
                    </div>
                    <div className="cards">
                        <img src="./src/image/fishChips.webp" alt="" />
                        <h1 className="cdTitle">FISH & CHIPS</h1>
                        <p className='value' style={{display:'none'}}>11</p>
                        <p className="cdPrice"><i className="fa-solid fa-rupee-sign"></i> 160</p>
                        <button className='bt' onClick={handleAdd12}>Add Now</button>
                    </div>
                </div>
                <div className="msBtLine"><div></div></div>
            </section>
            {/* ========================mains Section- Start============================ */}
            {/* ========================Order cart-start====================================== */}
            <section style={cart} className="orderCartSection">
                <h1 className="odrCartTitle">Your Order</h1>
                <div className="odrLine"><div></div></div>
                <div className='odrName'>
                    <p>{odrName}</p> <span><span onClick={handleDec}>-</span> {quantity} <span onClick={handleInc}>+</span></span> <span>{odrPrice}</span>
                </div>
                <div className="odrLine"><div></div></div>
                <div className="odrAmount">
                    <p>Tolal:</p><span>2343</span>
                </div>
                <div className="odrBtn">
                    <button className='odrBt'>Make Payment</button>
                </div>
            </section>
            {/* ========================Order cart-end====================================== */}
        </>
    )
}

export default Menu
