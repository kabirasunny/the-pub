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
                        <p className="cdPara">I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.</p>
                        <p className="cdPrice">100</p>
                    </div>
                    <div className="lunchMenuCards">
                        <img src="./src/image/mixSalad.webp" alt="" />
                        <h1 className="cdTitle">MIXED SALAD</h1>
                        <p className="cdPara">I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.</p>
                        <p className="cdPrice">100</p>
                    </div>
                    <div className="lunchMenuCards">
                        <img src="./src/image/ShrimpSalad.webp" alt="" />
                        <h1 className="cdTitle">★ SHRIMP SALAD</h1>
                        <p className="cdPara">I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.</p>
                        <p className="cdPrice">100</p>
                    </div>
                    <div className="lunchMenuCards">
                        <img src="./src/image/nuchos.webp" alt="" />
                        <h1 className="cdTitle">NUCHOS</h1>
                        <p className="cdPara">I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.</p>
                        <p className="cdPrice">100</p>
                    </div>
                    <div className="lunchMenuCards">
                        <img src="./src/image/potatoWedges.webp" alt="" />
                        <h1 className="cdTitle">POTATO WEDGES</h1>
                        <p className="cdPara">I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.</p>
                        <p className="cdPrice">100</p>
                    </div>
                    <div className="lunchMenuCards">
                        <img src="./src/image/potatoBoats.webp" alt="" />
                        <h1 className="cdTitle">POTATO BOATS</h1>
                        <p className="cdPara">I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.</p>
                        <p className="cdPrice">100</p>
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
                        <p className="cdPara">I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.</p>
                        <p className="cdPrice">100</p>
                    </div>
                    <div className="cards">
                        <img src="./src/image/chickenSandwich.webp" alt="" />
                        <h1 className="cdTitle">CHICKEN SANDWICH</h1>
                        <p className="cdPara">I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.</p>
                        <p className="cdPrice">100</p>
                    </div>
                    <div className="cards">
                        <img src="./src/image/beefBurger.webp" alt="" />
                        <h1 className="cdTitle">BEEF BURGER</h1>
                        <p className="cdPara">I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.</p>
                        <p className="cdPrice">100</p>
                    </div>

                    <div className="cards">
                        <img src="./src/image/VegBurger.webp" alt="" />
                        <h1 className="cdTitle">VEGETARIAN BURGER</h1>
                        <p className="cdPara">I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.</p>
                        <p className="cdPrice">100</p>
                    </div>
                    <div className="cards">
                        <img src="./src/image/stick.webp" alt="" />
                        <h1 className="cdTitle">★ STEAK</h1>
                        <p className="cdPara">I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.</p>
                        <p className="cdPrice">100</p>
                    </div>
                    <div className="cards">
                        <img src="./src/image/fishChips.webp" alt="" />
                        <h1 className="cdTitle">FISH & CHIPS</h1>
                        <p className="cdPara">I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.</p>
                        <p className="cdPrice">100</p>
                    </div>
                </div>
            </section>
            {/* ========================mains Section- Start============================ */}
        </>
    )
}

export default Menu
