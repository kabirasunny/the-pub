import React from 'react'
import './About.css'

const About = () => {
    return (
        <>
            <section className="about">
                <div className="aboutCard">
                    <img src="./src/image/aboutCard.webp" alt="" />
                </div>
                <div className="aboutContainer">
                    <h1 className="acTitle">About Us</h1>
                    <p className="acPara">I'm a paragraph. Click here to add your own text and edit me.
                        It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                        Feel free to drag and drop me anywhere you like on your page.
                        I’m a great place for you to tell a story and let your users know a little more about you.



                        This is a great space to write long text about your company and your services.
                        You can use this space to go into a little more detail about your company.
                        Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors.
                        Make your company stand out and show your visitors who you are.</p>
                    <div className="acLine"><div></div></div>
                    <h1 className="formTitle">Contact Us</h1>
                    <p className="formPara">Contact us to book a table for any occasion. We accept reservations for up to 20 people.</p>
                    <form action="">
                        <input type="text" name="" id="" placeholder='Name' />
                        <input type="email" name="" id="" placeholder='Email' />
                        <input type="tel" name="" id="" placeholder='Phone' />
                        <textarea name="" id="" placeholder='Type Your Message Here...'></textarea>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
                <div className="btLine"><div></div></div>
            </section>
        </>
    )
}

export default About
