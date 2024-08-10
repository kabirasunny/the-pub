import React from 'react'
import './Home.css'
const Home = () => {
    return (
        <>
            {/* ====================Section video Start========================= */}
            <section className="firstSection">
                <div className="videoDiv">
                    <video id='myVideo' autoPlay muted loop src='./src/video/Bar(720P_HD).mp4'>
                    </video>
                    <button id='myBtn' hidden>Pause</button>
                </div>
            </section>
            {/* ====================Section video End========================= */}
            {/* ====================Section Card Start========================= */}

            <section className="cards">
                <div className="card">
                    <h2 className="cardTitle">Karaoke Night</h2>
                    <img src="./src/image/card-1.webp" alt="" />
                    <p className='cardPara'>
                        I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                    <p className="rmBtn">Read More</p>
                </div>
                <div className="card">
                    <h2 className="cardTitle">Enjoy Our Snacks</h2>
                    <img src="./src/image/card-2.webp" alt="" />
                    <p className='cardPara'>
                        I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                    <p className="rmBtn">Read More</p>
                </div>
                <div className="card">
                    <h2 className="cardTitle">Celebrate With Us</h2>
                    <img src="./src/image/card-3.webp" alt="" />
                    <p className='cardPara'>
                        I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                    <p className="rmBtn">Read More</p>
                </div>
                <div className="card">
                    <h2 className="cardTitle">Happy Hour</h2>
                    <span className='cardTime'>Weekends</span>
                    <span className="cardTime">Between 5-7pm</span>
                    <p className='cardPara'>
                        I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                    
                </div>
             
            </section>

            {/* ====================Section Card End========================= */}
        </>
    )
}

export default Home
