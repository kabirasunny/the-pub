import React from 'react'
import './Footer.css'
import { FaXTwitter,FaInstagram,FaFacebookF } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <section className="footerSection">
                <div className="contactDetails">
                    <div className="contact">
                        <h1>CONTACT</h1>
                        <p>500 Terry Francine Street
                            San Francisco, CA  94158</p>
                        <p>E  /  Info@mysite.com</p>
                        <p>T  /  123-456-7890</p>
                        <a href=''><FaXTwitter /></a>
                        <a href=''><FaInstagram /></a>
                        <a href=''><FaFacebookF /></a>
                    </div>
                    <div className="openTime">
                        <h1>OPENING HOURS</h1>
                        <p>Monday-Friday</p>
                        <p>11am - 11pm</p>
                        <p>Saturday - Sunday</p>
                        <p>10am - 12am</p>
                    </div>
                    <div className="location">
                        <h1>FIND US</h1>
                        <iframe src="https://www.google.com/maps/place/World+Street+Bhatola+Sec+82/@28.3865101,77.3516173,17z/data=!3m1!4b1!4m6!3m5!1s0x390cdd52c6435325:0xce6f78d6fcefe431!8m2!3d28.3865054!4d77.3541922!16s%2Fg%2F11hdqwggpf?entry=ttu" ></iframe>
                    </div>
                </div>
                <div className="copyRights"><p>&copy2024 All Keywords reserved www.thepub.com</p></div>
            </section>
        </>
    )
}

export default Footer
