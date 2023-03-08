import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';



import Auth from '../utils/auth';

import Navigation from "./Navigation";
import Footer from "./Footer";

const Signup = () => {
    const [ formState, setFormState ] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [addUser, { error, data }] = useMutation(ADD_USER);
    // const [ errorEmail, setErrorEmail ] = useState("")
    // const [ errorMessage, setErrorMessage ] = useState("")
    
    // const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const handleOnChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const { data } = await addUser({
                variables: { ...formState },
            });

            Auth.login(data.addUser.token);
            window.location.href="/login";
        } catch (e) {
            console.error(e);
        }
    };

    // React.useEffect(function() {
    //         if(regEx.test(data.email)) {
    //             setErrorEmail("")
    //             console.log(data)
    //         } else if (!regEx.test(data.email) && data.email != "") {
    //             setErrorEmail("email is invalid")
    //         }

    //         if (data.password === '') {
    //             setErrorMessage("Password is required")
    //         }
    //         else if (data.password) {
    //             setErrorMessage ('')
    //         }
    //         console.log(data)
    //         },[data]
    //         )

    return (
        <>
        <Navigation/>
        <div className="container signup">
        <h1 className="signupHeading">Sign up:</h1>
        
        {data ? (
                <div>
                    Sign Up Successful! Please Log In.
                    <Link to="/login"> Log In </Link>
                </div>
                ) : (
                <form className="signupForm" onSubmit={handleFormSubmit}>
                    <label>Name:</label><br/>
                    <input 
                        className="inputName" 
                        type='username'
                        value={formState.username}
                        onChange={handleOnChange}
                        name="username"
                        /> 
                        
                        <br/><br/>
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

export default Signup;