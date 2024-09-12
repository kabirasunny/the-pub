import React, { useState } from 'react'
import './Menu.css'
import { getCards } from '../services/user-service';

const Menu = () => {
    let presentHtml = document.querySelector(".lunchMenuCardBox");
    console.log(presentHtml)
    let listCards = [];

    const addDataToHtml = () => {
        presentHtml.innerHTML = '';
        if (listCards.length > 0) {
            listCards.forEach(card => {
                console.log(typeof(card.title))
                let newCards = document.createElement('div');
                newCards.classList.add('lunchMenuCards');
                newCards.dataset.id = card.id;
                newCards.innerHTML = `<img src="${card.image}" alt="" />
                        <h1 className="cdTitle">${card.title}</h1>
                        <p className="cdPrice"><i className="fa-solid fa-rupee-sign"></i> ${card.price}</p>
                        <button className='bt'>Add Now</button>`;
                presentHtml.appendChild(newCards);
            })
        }
    }

    const initCard = () => {
        getCards().then((allCards) => {
            listCards = allCards;
            addDataToHtml();
        })
        .catch((error) => {
            console.log(error + "faild card data");
        })
    }
    initCard();
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
                    {/* <div className="lunchMenuCards">
                        <img src="./src/image/beetrootSalad.webp" alt="" />
                        <h1 className="cdTitle">BEETROOT SALAD</h1>
                        <p className='value' style={{display:'none'}}>0</p>
                        <p className="cdPrice"><i className="fa-solid fa-rupee-sign"></i> 99</p>
                        <button className='bt' >Add Now</button>
                    </div> */}
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
                        <button className='bt' >Add Now</button>
                    </div>
                    <div className="cards">
                        <img src="./src/image/fishChips.webp" alt="" />
                        <h1 className="cdTitle">FISH & CHIPS</h1>
                        <p className="cdPrice"><i className="fa-solid fa-rupee-sign"></i> 160</p>
                        <button className='bt' >Add Now</button>
                    </div>
                </div>
                <div className="msBtLine"><div></div></div>
            </section>
            {/* ========================mains Section- Start============================ */}
        </>
    )
}

export default Menu
