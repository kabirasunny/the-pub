import React, { useEffect, useRef, useState } from 'react'
import './Menu.css'
import { getCards } from '../services/user-service';

const Menu = () => {
    const myRef = useRef(null);
    let listCards = [];

    const addDataToHtml = () => {   
        myRef.current.initCard = '';
        if (listCards.length > 0) {
            listCards.forEach(card => {
                console.log(typeof (card.title))
                let newCards = document.createElement('div');
                newCards.classList.add('menuBoxCard');
                newCards.dataset.id = card.id;
                newCards.innerHTML = `<img src="${card.image}" alt="" />
                        <h1>${card.title}</h1>`;
                myRef.current.appendChild(newCards);
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
            <section className="menu">
                <div className="menuTitle">
                    <h1>Menu</h1>
                </div>

                <div className="menuBox" ref={myRef}>
                </div>
                <div className="bottomLine"><div></div></div>
            </section>
            {/* ========================lunchMenu Section- end============================ */}
        </>
    )
}

export default Menu
