import React from 'react'
import './Menu.css'

const Menu = () => {
    return (
        <>
            {/* ========================lunchMenu Section- Start============================ */}
            <section className="lunchMenu">
                <div className="lunchMenuBox">
                    <h1 className="lmTitle">Menu</h1>
                    <h3 className="subTitle">Lunch Menu</h3>
                    <p className="subTlPara">Serve daily between 12-5pm </p>
                    <h2>Appetizers</h2>
                    <p className="lmDesc">I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.</p>
                </div>

                <div className="lunchMenuCardBox">
                    <div className="lunchMenuCards">
                        <img src="./src/image/beetrootSalad.webp" alt="" />
                        <h1 className="cdTitle">BEETROOT SALAD</h1>
                        <p className="cdPrice"><i className="fa-solid fa-rupee-sign"></i> 99</p>
                        <button className='bt'>Add Now</button>
                    </div>
                    <div className="lunchMenuCards">
                        <img src="./src/image/mixSalad.webp" alt="" />
                        <h1 className="cdTitle">MIXED SALAD</h1>
                        <p className="cdPrice"><i className="fa-solid fa-rupee-sign"></i> 120</p>
                        <button className='bt'>Add Now</button>
                    </div>
                    <div className="lunchMenuCards">
                        <img src="./src/image/ShrimpSalad.webp" alt="" />
                        <h1 className="cdTitle">★ SHRIMP SALAD</h1>
                        <p className="cdPrice"><i className="fa-solid fa-rupee-sign"></i> 150</p>
                        <button className='bt'>Add Now</button>
                    </div>
                    <div className="lunchMenuCards">
                        <img src="./src/image/nuchos.webp" alt="" />
                        <h1 className="cdTitle">NUCHOS</h1>
                        <p className="cdPrice"><i className="fa-solid fa-rupee-sign"></i> 110</p>
                        <button className='bt'>Add Now</button>
                    </div>
                    <div className="lunchMenuCards">
                        <img src="./src/image/potatoWedges.webp" alt="" />
                        <h1 className="cdTitle">POTATO WEDGES</h1>
                        <p className="cdPrice"><i className="fa-solid fa-rupee-sign"></i> 99</p>
                        <button className='bt'>Add Now</button>
                    </div>
                    <div className="lunchMenuCards">
                        <img src="./src/image/potatoBoats.webp" alt="" />
                        <h1 className="cdTitle">POTATO BOATS</h1>
                        <p className="cdPrice"><i className="fa-solid fa-rupee-sign"></i> 100</p>
                        <button className='bt'>Add Now</button>
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
                        <p className="cdPrice"><i className="fa-solid fa-rupee-sign"></i> 300</p>
                        <button className='bt'>Add Now</button>
                    </div>
                    <div className="cards">
                        <img src="./src/image/chickenSandwich.webp" alt="" />
                        <h1 className="cdTitle">CHICKEN SANDWICH</h1>
                        <p className="cdPrice"><i className="fa-solid fa-rupee-sign"></i> 200</p>
                        <button className='bt'>Add Now</button>
                    </div>
                    <div className="cards">
                        <img src="./src/image/beefBurger.webp" alt="" />
                        <h1 className="cdTitle">CHICKEN BURGER</h1>
                        <p className="cdPrice"><i className="fa-solid fa-rupee-sign"></i> 189</p>
                        <button className='bt'>Add Now</button>
                    </div>

                    <div className="cards">
                        <img src="./src/image/VegBurger.webp" alt="" />
                        <h1 className="cdTitle">VEGETARIAN BURGER</h1>
                        <p className="cdPrice"><i className="fa-solid fa-rupee-sign"></i> 99</p>
                        <button className='bt'>Add Now</button>
                    </div>
                    <div className="cards">
                        <img src="./src/image/stick.webp" alt="" />
                        <h1 className="cdTitle">★ STEAK</h1>
                        <p className="cdPrice"><i className="fa-solid fa-rupee-sign"></i> 99</p>
                        <button className='bt'>Add Now</button>
                    </div>
                    <div className="cards">
                        <img src="./src/image/fishChips.webp" alt="" />
                        <h1 className="cdTitle">FISH & CHIPS</h1>
                        <p className="cdPrice"><i className="fa-solid fa-rupee-sign"></i> 160</p>
                        <button className='bt'>Add Now</button>
                    </div>
                </div>
                <div className="msBtLine"><div></div></div>
            </section>
            {/* ========================mains Section- Start============================ */}
            {/* ========================Order cart-start====================================== */}
            <div className="OrderCart">
                <h1 className="odrCartTitle">Your Order</h1>
                <div className="odrLine"><div></div></div>
                <div className='odrName'>
                    <p>beetroot</p> <span>1</span> <span>100</span>
                </div>
            </div>
            {/* ========================Order cart-end====================================== */}
        </>
    )
}

export default Menu
