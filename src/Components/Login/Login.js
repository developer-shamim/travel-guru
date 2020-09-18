import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className="login-area">
            <h5>LOG IN</h5>
            <br/>
            <br/>
            <form action="">
                
                <input type="text" placeholder="User name or Email"/>
                <br/>
                <input type="password" placeholder="Password"/>
                <br/>
                <div>

                </div>
                <a href="/"> <p>Forgot password? </p> </a>
                <div>
                    <button type="button" className="btn-log" >Log In</button>
                </div>
                <br/>
                <p> Don't have an account yet?' </p> <Link to={`/account`}> <p> Create an account</p></Link>
                <p>OR</p>
                <div>
                    <button className="btn-social" type="button"> Continue with Facebook</button>
                </div>
                <br/>
                <div>
                    <button className="btn-social" type="button"> Continue with Google</button>
                </div>

            </form>
        </div>
    );
};

export default Login;