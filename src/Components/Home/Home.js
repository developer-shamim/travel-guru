
import React, { useEffect, useState } from 'react';
import fakeData from '../../FakeData/fakeData';
import { addToDatabaseCart, getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Slides from '../Cards/Slides';
import Destination from '../Destination/Destination';
import './Home.css'


const Home = () => {
    const sites = fakeData.slice(0,3);
    const [place, setPlace] = useState(sites)
    const [cart, setCart] = useState([])
    // const [bookingPlaced, setBookingPlaced] = useState(false);

    const handlePlaceBooking = () => {
        setPlace([]);
        // setBookingPlaced(true);
        processOrder();
    }
    

   const removePlace = (placeId) => {
        const newCart = cart.filter(pls => pls.id !== placeId );
        setCart(newCart)
        removeFromDatabaseCart(placeId)
   };
   
    const handleAddBooking = (place) => {
        const selectCart = [...cart, place]
        setCart(selectCart)

        const samePlace = selectCart.filter(pls => pls.id === place.id)
        const count = samePlace.length;
        addToDatabaseCart(place.id, count);
    }

    useEffect (() => {
        const savedCart = getDatabaseCart();
        const placeIds = Object.keys(savedCart);

        const cartPlaces = placeIds.map( id=> {
        const place = fakeData.find(pls => pls.id === id);
        place.quantity = savedCart[1];
        return place;
        });
        setCart(cartPlaces);
   },[])

//    let placeBooking;

//    if (bookingPlaced) {
//     placeBooking = <Link to={'/booking'}/>
//    }
    

    return (
        <div className="home-area">

            <div>
            {
                cart.map(pls => <Destination
                key={cart.id}
                place={pls}
                removePlace = {removePlace}
                handlePlaceBooking = {handlePlaceBooking}>  
                
                </Destination>)
            }
           {/* {placeBooking} */}
             </div>

           <div className="places" >
            {
                place.map(place => <Slides
                    key={place.id}
                    handleBooking={handleAddBooking}
                    place={place}>    
                    </Slides>)

            }

            
           </div>   
            
        </div>
    );
}

export default Home;