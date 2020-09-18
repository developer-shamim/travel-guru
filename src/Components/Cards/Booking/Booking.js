
import React from 'react';
import { Link } from 'react-router-dom';

import './Booking.css'

const Booking = () => {
    return (
        <div className="booking-area">
                        
            <form action="">
                <p>Origin</p>
                <input type="text" placeholder="From"/>
                <br/>
                <p>Destination</p>
                <input type="text" placeholder="To"/>
                <br/>
                <div>
                    <p>From</p>
                    <input type="date" placeholder="Enter start date"/>
                    <p>To</p>
                    <input type="date" placeholder="Enter end date"/>
                </div>
                <br/>
                <div>
                  <Link to={`/login`}> <button type="button" className="btn-primary"> Start Booking</button> </Link>
                </div>
            </form>
        </div>
    );
};

export default Booking;