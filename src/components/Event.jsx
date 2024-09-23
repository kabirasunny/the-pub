import React from 'react'
import './Event.css'

const Event = () => {
    return (
        <>
            {/* =======================about event start======================== */}
            <section className="aboutEvent">
                <div className="aeDiv">
                    <h1 className="aeTitle">Events</h1>
                    <p className="aePara">Events in pub and book advance reserve table and eat and food and enjoy. It’s easy. Just click “Edit Text” or double click me and you can start adding your
                        own content and make changes to the font. I’m a great place for you to let your users know
                        a little more about you. If you want to delete me lorem on me and lorem lorem.​</p>
                </div>
            </section>
            {/* =======================about event start======================== */}


            {/* =======================event card start======================== */}
            <section className="eventCards">
                <div className="eCard">
                    <img src="./src/image/eventCard1.webp" alt="" />
                    <div className="eCdDetails">
                        <h1 className="eTitle">Karaoke Night</h1>
                        <p className="ePara">Karaoke Night is perfect and enjoy in ABC. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                        <small className="eTimeDay">When: Every Thursday from 8pm</small>
                    </div>
                </div>

                <div className="eCard">
                    <div className='wkd'>
                        <h1 className='wkdTitle'>Weekdays</h1>
                        <h2 className='wkdTime'>Between 5-7pm​</h2>
                    </div>
                    <div className="eCdDetails">
                        <h1 className="eTitle">Happy Hour</h1>
                        <p className="ePara">Happy hour in weekend and fun with us and friends. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                        <small className="eTimeDay">When: Weekdays between 5-7pm</small>
                    </div>
                </div>

                <div className="eCard">
                    <img src="./src/image/eventCard2.webp" alt="" />
                    <div className="eCdDetails">
                        <h1 className="eTitle">Sunday Brunch</h1>
                        <p className="ePara">Sunday Brunch lot of enjoy with us and eat. It’s easy. lorem lorem
                            or lorem lorem me and you can start adding your own
                            content and make lorem lorem.</p>
                        <small className="eTimeDay">When: From 11am-3pm we serve your favorite Sunday roast</small>
                    </div>
                </div>

                <div className="eCard">
                    <img src="./src/image/eventCard3.webp" alt="" />
                    <div className="eCdDetails">
                        <h1 className="eTitle">Buy One Get One Free</h1>
                        <p className="ePara">Buy one get one free offer latest don't miss this offer. It’s easy. Just click “lorem loerm
                            or lorem lorem me and you can start lorem your own
                            content and make loerm.</p>
                        <small className="eTimeDay">When: Saturdays between 1-3pm</small>
                    </div>
                </div>
                <div className="btLine"><div></div></div>
            </section>
            {/* =======================event card end======================== */}


        </>
    )
}

export default Event
