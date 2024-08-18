import React from 'react'
import './Table.css'

const Table = () => {
    return (
        <>
            {/* ====================Section Reserve-Table Start========================= */}
            <section className="reserveTbl">
                <h1 className='reserveTitle'>Make a reservation</h1>
                <p className="reservePara">To help us find the best table for you, select the preferred party size, date, and time of your reservation.</p>
                <form action="">
                    <div className="fmGDT">
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
                    </div>
                    <div className="fmTimes">
                        <div className="fmTm">12:00 PM</div>
                        <div className="fmTm">12:15 PM</div>
                        <div className="fmTm">12:30 PM</div>
                        <div className="fmTm">12:45 PM</div>
                        <div className="fmTm">1:00 PM</div>
                        <div className="fmTm">1:15 PM</div>
                        <div className="fmTm">1:30 PM</div>
                        <div className="fmTm">1:45 PM</div>
                        <div className="fmTm">2:00 PM</div>
                        <div className="fmTm">2:15 PM</div>
                        <div className="fmTm">2:30 PM</div>
                        <div className="fmTm">2:45 PM</div>
                        <div className="fmTm">3:00 PM</div>
                        <div className="fmTm">3:15 PM</div>
                        <div className="fmTm">3:30 PM</div>
                    </div>
                    <button type="submit">Save</button>
            </form>
            <div className="reserveTableLine"><div></div></div>
        </section >
            {/* ====================Section Reserve-Table End========================= */ }
        </>
    )
}

export default Table
