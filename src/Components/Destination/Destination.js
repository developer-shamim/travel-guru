import React from 'react';
import { Link } from 'react-router-dom';
import './Distination.css';


const Destination = (props) => {
    const {id, place, Descreption} = props.place;

   
    
    return (
        <div className="">
            <h1 className={"site-heading"}>{place}</h1>
            <br/>
            <p className={"site-text"}>{Descreption}</p>
            <Link to = {`/booking`}> <button className="btn-booking" type="button" onClick={() => props.handlePlaceBooking()}> Booking -> </button>
            </Link>
            <div className="date-style">
             <button type="button" className="btn btn-danger" onClick={() => props.removePlace(id)}> Remove X  </button>
            </div>
            
        </div>
    );
};

export default Destination;