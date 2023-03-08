import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';
import Navigation from "./Navigation";
import Footer from "./Footer";

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);


    const handleOnChange = (e) => {
        const { name, value } = e.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.log(e);
        }

        setFormState({
            email: '',
            password: '',
        });
    };

    return (
        <>
        <Navigation/>
        <div className="container Login">
        <h1 className="signupHeading">Log In:</h1>
        
        {data ? (
                <div>
                    Loggin Successful
                    <Link to="/"> Log In </Link>
                </div>
                ) : (
                <form className="loginForm" onSubmit={handleFormSubmit}>
                    <label>Email Address:</label><br/>
                    <input 
                        className="inputEmail"  
                        value={formState.email} 
                        type='email' 
                        onChange={handleOnChange} 
                        name="email" /><br/><br/>
                    <label>Password:</label><br/>
                    <input 
                        className="inputPassword" 
                        value={formState.password}
                        type= 'password' 
                        onChange={handleOnChange} 
                        name= "password" /><br/>
                    <button
                        className="signupBtn"
                        style={{ cursor: 'pointer' }}
                        type="submit"
                    >
                        Submit
                    </button>
                    {/* <p id="errorMessage"></p>
                    <p>{errorEmail}</p>
                    <p>{errorMessage}</p> */}
                    {/* <input type="submit"/> */}
                </form>    
        )}

        {error && (
            <div>{error.message}</div>
            
        )}
            
        </div>
        <Footer />
        </>
    )
}

export default Login;

