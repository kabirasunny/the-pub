import React from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom'
const Home = () => {
    return (
        <>
            {/* ====================Section video Start========================= */}
            <section className="firstSection">
                <div className="imageDiv">
                    <img src="./src/image/thepub.jpg" alt="" />
                </div>
            </section>
            {/* ====================Section video End========================= */}
            {/* ====================Section Card Start========================= */}

            <section className="cards">
                <div className="card">
                    <h2 className="cardTitle">Karaoke Night</h2>
                    <img src="./src/image/card-1.webp" alt="" />
                    <p className='cardPara'>
                        Karaoke Night is perfect and enjoy in ABC. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                    <NavLink to='/event' className="rmBtn">Read More</NavLink>
                </div>
                <div className="card">
                    <h2 className="cardTitle">Enjoy Our Snacks</h2>
                    <img src="./src/image/card-2.webp" alt="" />
                    <p className='cardPara'>
                        Enjoy our snacks togather and loaded snacks. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                    <NavLink to='/menu' className="rmBtn">Read More</NavLink>
                </div>
                <div className="card">
                    <h2 className="cardTitle">Celebrate With Us</h2>
                    <img src="./src/image/card-3.webp" alt="" />
                    <p className='cardPara'>
                        Celebrate with us and friends end eat food. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                    <NavLink to='/about' className="rmBtn">Read More</NavLink>
                </div>
                <div className="card">
                    <h2 className="cardTitle">Happy Hour</h2>
                    <div className="bgClr">
                        <h3>Weekends</h3>
                        <h3>Between 5-7pm</h3>
                    </div>
                    <p className='cardPara'>
                        Happy hour in weekend and fun with us and friends. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                </div>
                <div className="cdBtLine"><div></div></div>
            </section>

            {/* ====================Section Card End========================= */}
            {/* ====================Section Reserve-Table Start========================= */}
            <section className="reserveTbl">
                <h1 className='reserveTitle'>Reserve Table</h1>
                <form action="">
                    <div className="partySize">
                        <select name="" id="">
                            <option value="1 guest">1 Guest</option>
                            <option value="2 guests">2 Guests</option>
                            <option value="3 guests">3 Guests</option>
                            <option value="4 guests">4 Guests</option>
                            <option value="5 guests">5 Guests</option>
                            <option value="6 guests">6 Guests</option>
                        </select>
                    </div>
                    <div className="date">
                        <input type="date" name="" id="" placeholder='Date' />
                    </div>
                    <div className='time'>
                        <select name="" id="">
                            <option value="12:00 PM">12:00 PM</option>
                            <option value="12:15 PM">12:15 PM</option>
                            <option value="12:30 PM">12:30 PM</option>
                            <option value="12:45 PM">2:45 PM</option>
                            <option value="1:00 PM">1:00 PM</option>
                            <option value="1:15 PM">1:15 PM</option>
                            <option value="1:30 PM">1:30 PM</option>
                        </select>
                    </div>
                    <div className="fdTable">
                        <NavLink to="/rstable">Find a Table</NavLink>
                    </div>
                </form>
                <div className="reserveTableLine"><div></div></div>
            </section>
            {/* ====================Section Reserve-Table End========================= */}
        </>
    )
}

export default Home
