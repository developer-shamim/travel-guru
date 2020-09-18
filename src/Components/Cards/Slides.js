
import { Link } from '@material-ui/core';
import React from 'react';
import './Slides.css';



const Slides = (props) => {
    const {id, img, place} = props.place;
    // const handleBooking = props.handleBooking;
    return (
       
             <div className="slide-container">
                 <div className="column">
                    <img src={img} className="photo" alt=""/>
                 
                    <Link to={`/destination/${id}`}> <button type="button" className="btn-style" 
                    onClick={()=> props.handleBooking(props.place)} >{place}</button></Link>
                 </div>
                    


                {/* <div className="carousel slide " data-ride="carousel">
                    <div className="carousel-inner ">
                        <div className="carousel-item active">
                            <img src={img} className="d-block w-100" alt=""/>
                        <div className="carousel-caption d-none d-md-block">
                           <Link to={`/Destination`}></Link> <button type="button" onClick={()=> props.handleBooking(props.place)} >{place}</button>
                    </div>
                </div>

                </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                    </a>
                </div> */}
            </div>

        
       
        
    );
};

export default Slides;