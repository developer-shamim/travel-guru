import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const CreateAccount = () => {
    return (
        <div className="account-area">
             <h5>Create an account</h5>
            <br/>
            <form action="">
               
                <input type="text" placeholder="First Name"/>
                <br/>
                <input type="text" placeholder="Last Name"/>
                <br/>
                <input type="text" placeholder="Email"/>
                <br/>
                <input type="text" placeholder="Password"/>
                <br/>
                <input type="text" placeholder="Confirm Password"/>
                <br/>
                
                <div>
                    <br/>
                    <button type="button" className="btn-warning" >Create an account</button>
                </div>
                <br/>
                <p> Already have an account? </p>
                    <Link to={`/login`} > <p> Log in </p> </Link>
                
                <p>OR</p>
                
                <div>
                    <button type="button"> Continue with Facebook</button>
                </div>
                <br/>
                <div>
                    <button type="button"> Continue with Google</button>
                </div>

            </form>
        </div>
    );
};

export default CreateAccount;