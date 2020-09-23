import { Link } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import React from 'react';
import './Header.css';


const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }));

const Header = (props) => {
  
    const classes = useStyles();

    return (
        <div className="header-area">
             <nav className="navbar navbar-expand-lg navbar-light bg-color">
            <Link to = "/home" className="navbar-brand" href="home">
                <img className="logo" src="/images/logo.png" alt=""/>
            </Link>

            <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search your destination.."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
                
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                <Link to = "/home"  className="nav-link" href="home">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item ">
                    <Link to = "/news"className="nav-link" href="news">News <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item ">
                    <Link to = "/blog"className="nav-link" href="blog">Blog <span className="sr-only">(current)</span></Link>
                </li>
                
                <li className="nav-item ">
                    <Link to = "/destination" className="nav-link" href="destination">Destinations <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item ">
                    <Link to = "/booking" className="nav-link" href="booking">Booking <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item ">
                    <Link to = "/hotels" className="nav-link" href="hotels">Hotels <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item ">
                    <Link to = "/contact" className="nav-link" href="contact">Contact <span className="sr-only">(current)</span></Link>
                </li>
                
                <li className="nav-item">
                  
                    <Link to={`/login`}> <button className="nav-link btn btn-warning" type="button" href="login">Log in</button> </Link>
                
                </li>
                </ul> 
            </div>
            </nav>
        </div> 
    );
};

export default Header;