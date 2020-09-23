import React, { createContext, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoMatch from './NoMatch/NoMatch';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Hotels from './Components/Hotels/Hotels';
import Booking from './Components/Booking/Booking';

export const UserContext = createContext();



function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  
  const [site, setSite] = useState(" "); 
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, site, setSite]}> 
   
    <div>
      <Router>
      <Header/>
        <Switch>
          <Route path="/home">
             <Home/>
          </Route>
          
            <Route path="/booking">
              <Booking/>
            </Route>

            <Route path="/login">
              <Login/>
            </Route>
      
            <PrivateRoute path="/hotels">
              <Hotels/>
            </PrivateRoute>
            
          <Route exact path="/">
             <Home/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>

    </div>
    </UserContext.Provider>
  );
}

export default App;
