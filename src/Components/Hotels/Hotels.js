import React, { useContext, useState  } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import hotelData from '../../FakeData/hotelData';
import GoogleMap from '../../GoogleMap/GoogleMap';
import './Hotels.css';
import { UserContext } from '../../App';




const Hotels = (props) => {
    const hotels = hotelData.slice (0,3)
    const [hotel, setHotel] =useState (hotels);
    const [,,site] = useContext (UserContext)
    
    return (

        <div className="hotel-container" >
            <div className="hotel-box">
            <p> 252 stays during Oct 13-17 guests </p>
    <h4> Stay in {site}</h4>
         
            {
                hotel.map(hotel=><div>
                
                        <div>
                            <img className="hotel-photo" src={hotel.img} alt=""/>
                        </div>
                        <div className="text-area">
                            <h5> {hotel.hotelName} </h5>
                            <p>4 guests 2 bedrooms 2 beds 2 baths</p>
                            <p>WiFi Air conditioning Kitchen</p>
                            <p>Cancelation flexibility available</p>
                            <div> <h6> <FontAwesomeIcon className="rating-star" icon={faStar} /> {hotel.rating}  <span className="pricing" >{hotel.price} night</span></h6></div>
                        </div>
                    </div>
                )
            }
            </div>
                <div className="map-area">
                    <GoogleMap id="myMap"
            options={{
                center: { lat: 41.0082, lng: 28.9784 },
                zoom: 8
            }}></GoogleMap>
                
                </div>
        </div>            
       
       
    );
};

export default Hotels;