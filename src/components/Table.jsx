import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import './Table.css'
import { rsTable } from '../services/user-service';

const Table = () => {

    const { register,
        handleSubmit,
        watch,
        setError,
        formState: { errors } }
        = useForm();
    const userData = JSON.parse(localStorage.getItem('user'));
    const [data, setData] = useState({
        guest: '',
        date: '',
        time: '',
        number: userData.number
    })

    const handleChanges = (e) => {
        setData({ ...data, [e.target.guest]: e.target.value })
    }
    const [tlMsg, setTlMsg] = useState('');
    const reserveTable = () => {
        rsTable(data).then((resp) => {
            setTlMsg(resp);
        }).catch((error) => {
            setTlMsg(error + "Data faild");
        })
    }

    return (
        <>
            {/* ====================Section Reserve-Table Start========================= */}
            <section className="reserveTbl">
                <h1 className='reserveTitle'>Make a reservation</h1>
                <p style={{ color: 'white', fontSize: '25px', width: '100%', textAlign: 'center' }}>{tlMsg}</p>
                <p className="reservePara">To help us find the best table for you, select the preferred party size, date, and time of your reservation.</p>
                <form onSubmit={handleSubmit(reserveTable)} className='form'>
                    <div className="fmGDT">
                        <div className="partySize">
                            <select name="guest" id="" onChange={(e) => handleChanges(e)}>
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
                            <select name="time" id="">
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
                    <button type="submit">Save</button>
                </form>
                <div className="reserveTableLine"><div></div></div>
            </section >
            {/* ====================Section Reserve-Table End========================= */}
        </>
    )
}

export default Table
