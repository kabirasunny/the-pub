import React, { useState } from 'react'
import './About.css'
import { useForm } from 'react-hook-form';
import { contact } from '../services/user-service';

const About = () => {
    const { register,
        handleSubmit,
        watch,
        setError,
        formState: { errors } }
        = useForm();

    const [data, setData] = useState({
        fullName: '',
        email: '',
        number: '',
        message: ''
    })

    const handleChange = (e) => {

        setData({ ...data, [e.target.name]: e.target.value })
    }

    const submit = () => {
        data.trim;
        contact(data).then((resp) => {
            alert(resp);
        }).catch((error) => {
            alert(error);
        })
    }


    return (
        <>
            <section className="about">
                <div className="aboutCard">
                    <img src="./src/image/aboutCard.webp" alt="" />
                </div>
                <div className="aboutContainer">
                    <h1 className="acTitle">About Us</h1>
                    <p className="acPara">Bar and restaurant equipment, Stainless steel bar and cocktail articles, Bar equipment, Equipment and accessories, Bar equipment, Bottle stoppers, Glasses, Boston shakers, Bottle baskets, Champagne bowls and buckets, Corks with or without spout for wine and champagne, Wine presentation, Vacuvin vacuum pump, Utensils, Measure, Professional equipment for the bartender. Discover the details by clicking on each Art. Nr. Discover all the details by clicking on each item. The jigger is also useful in the kitchen to measure the alcohol content of recipes, especially pastries.


                        This is a great space to write long text about your company and your services.
                        You can use this space to go into a little more detail about your company.
                        Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors.
                        Make your company stand out and show your visitors who you are.</p>
                    <div className="acLine"><div></div></div>
                    <h1 className="formTitle">Contact Us</h1>
                    <p className="formPara">Contact us to book a table for any occasion. We accept reservations for up to 20 people.</p>
                    <form onSubmit={handleSubmit(submit)}>
                        <input type="text" name="fullName" id="" placeholder='Name' required onChange={(e) => handleChange(e)} />
                        <input type="email" name="email" id="" placeholder='Email' required onChange={(e) => handleChange(e)} />
                        <input type="tel" name="number" id="" placeholder='Phone' required onChange={(e) => handleChange(e)} />
                        <textarea name="message" id="" placeholder='Type Your Message Here...' required onChange={(e) => handleChange(e)} ></textarea>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
                <div className="btLine"><div></div></div>
            </section>
        </>
    )
}

export default About
