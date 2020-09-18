import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import NoMatch from './NoMatch/NoMatch';
import Booking from './Components/Cards/Booking/Booking';
import Login from './Components/Login/Login';
import CreateAccount from './Components/Login/CreateAccount.js';



function App() {
  return (
    <div className="background">
      <Header/>
      <Router>
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
            <Route path="/account">
              <CreateAccount> </CreateAccount>
            </Route>
          <Route exact path="/">
             <Home/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
      
      
      

      
      
    </div>
  );
}

export default App;
