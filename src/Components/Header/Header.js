import { Link } from '@material-ui/core';
import React from 'react';
import './Header.css';



const Header = () => {
    
    return (
        <div className="">
             <nav className="navbar navbar-expand-lg navbar-light bg-color">
            <Link to = "/home" className="navbar-brand" href="home">
                <img className="logo" src="/images/logo.png" alt=""/>
            </Link>

            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-4" type="search" placeholder="Search your destinations" aria-label="Search"/>
                <button className="btn btn-warning my-2 my-sm-0" type="submit">Search</button>
                </form>
                
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                <Link to = "/home"  className="nav-link" href="home">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active">
                    <Link to = "/news"className="nav-link" href="news">News <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active">
                    <Link to = "/destination"className="nav-link" href="destination">Destinations <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active">
                    <Link to = "/ticketing" className="nav-link" href="ticketing">Ticketing <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active">
                    <Link to = "/blog"className="nav-link" href="blog">Blog <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active">
                    <Link to = "/contact"className="nav-link" href="contact">Contact <span className="sr-only">(current)</span></Link>
                </li>
                
                <li className="nav-item">
                <Link to={`/login`}> <button className="nav-link btn btn-warning" type="button" >Log in</button> </Link>
                </li>
                </ul> 
            </div>
            </nav>
           

        </div>
       
    );
};

export default Header;