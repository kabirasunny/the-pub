import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import './Table.css'
import { getBooking, rsTable } from '../services/user-service';

const Table = () => {

    const { register,
        handleSubmit,
        watch,
        setError,
        formState: { errors } }
        = useForm();
    const userData = JSON.parse(localStorage.getItem('user'));
    let num;
    if (userData === null) {
        num = '';
    } else {
        num = userData.number;
    }
    const [data, setData] = useState({
        guests: '',
        date: '',
        time: '',
        number: num
    })

    const handleChanges = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const reserveTable = () => {
        rsTable(data).then((resp) => {
            alert(resp);
        }).catch((error) => {
            alert(error);
        })
    }

    const bookingHtml = document.querySelector('.bookingCard');
    const listBooking = [];
    console.log(listBooking)
const [bkToggle,setBkToggle] = useState({display:'none'});
    const showBook = () => {
        setBkToggle({display:'block'})
        bookingHtml.innerHTML = '';
        if (listBooking.length > 0) {
            listBooking.forEach(book => {
                let newCard = document.createElement('div');
                newCard.classList.add('bkCards');
                newCard.innerHTML = `<div className='bkTitle'>Your Booking</div>
                        <div className="guestNo">Guest:${book.guests}</div>
                        <div className="bkDate">Date:${book.date}</div>
                        <div className="bkTime">Time:${book.time}</div>`;
                bookingHtml.appendChild(newCard);
            })
        }
    }

    const initCard = () => {
        getBooking().then((data) => {
            listBooking = data;
            showBook();
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <>
            {/* ====================Section Reserve-Table Start========================= */}
            <section className="reserveTbl">
                <h1 className='reserveTitle'>Make a reservation</h1>
                <p className="reservePara">To help us find the best table for you, select the preferred party size, date, and time of your reservation.</p>
                <form onSubmit={handleSubmit(reserveTable)} className='form'>
                    <div className="fmGDT">
                        <div className="partySize">
                            <select name="guests" id="" onChange={(e) => handleChanges(e)}>
                                <option value="1 guest">1 Guest</option>
                                <option value="2 guests">2 Guests</option>
                                <option value="3 guests">3 Guests</option>
                                <option value="4 guests">4 Guests</option>
                                <option value="5 guests">5 Guests</option>
                                <option value="6 guests">6 Guests</option>
                            </select>
                        </div>
                        <div className="date">
                            <input type="date" name="date" id="" placeholder='Date' onChange={(e) => handleChanges(e)} />
                        </div>
                        <div className='time'>
                            <select name="time" id="" onChange={(e) => handleChanges(e)}>
                                <option value="12:00 PM">12:00 PM</option>
                                <option value="12:15 PM">12:15 PM</option>
                                <option value="12:30 PM">12:30 PM</option>
                                <option value="12:45 PM">2:45 PM</option>
                                <option value="1:00 PM">1:00 PM</option>
                                <option value="1:15 PM">1:15 PM</option>
                                <option value="1:30 PM">1:30 PM</option>
                                <option value="1:45 PM">1:45 PM</option>
                                <option value="2:00PM">2:00 PM</option>
                                <option value="2:15 PM">2:15 PM</option>
                                <option value="2:30 PM">2:30 PM</option>
                                <option value="2:45 PM">2:45 PM</option>
                                <option value="3:00 PM">3:00 PM</option>
                                <option value="3:15 PM">3:15 PM</option>
                                <option value="3:30 PM">3:30 PM</option>
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
                    <div className='booking' onClick={initCard}>Show booking</div>
                    <div className="bookingCard" style={bkToggle}>
                    </div>
                    <button type="submit">Save</button>
                </form>
                <div className="reserveTableLine"><div></div></div>
            </section >
            {/* ====================Section Reserve-Table End========================= */}
        </>
    )
}

export default Table
