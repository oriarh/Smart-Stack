import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

import Navigation from "./Navigation";

export default function () {
    const [ data, setdata ] = useState({
        username: "",
        email: "",
        password: ""
    });
    const [ errorEmail, setErrorEmail ] = useState("")
    const [ errorMessage, setErrorMessage ] = useState("")

    const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    console.log(data)

    const handleOnChange = (event) => {
        setdata((preValue) => {
            return {
                ...preValue,
                [event.target.name]:event.target.value
            }
        })
    }

    React.useEffect(function() {
            if(regEx.test(data.email)) {
                setErrorEmail("")
                console.log(data)
            } else if (!regEx.test(data.email) && data.email != "") {
                setErrorEmail("email is invalid")
            }

            if (data.password === '') {
                setErrorMessage("Password is required")
            }
            else if (data.password) {
                setErrorMessage ('')
            }
            console.log(data)
            },[data]
            )

    return (
        <>
        <Navigation/>
        <div className="container signup">
        <h1 className="signupHeading">Sign up:</h1>
            <form className="signupForm">
               <label>Username:</label><br/>
               <input className="inputUsername" value={data.username} type='text' onChange={handleOnChange} name='username' /> <br/><br/>
               <label>Email Address:</label><br/>
               <input className="inputEmail"  value={data.email} type='email' onChange={handleOnChange} name="email" /><br/><br/>
               <label>Password:</label><br/>
               <input className="inputPassword" value={data.password} type='password' onChange={handleOnChange} name= "password" /><br/>
               <p id="errorMessage"></p>
               <p>{errorEmail}</p>
               <p>{errorMessage}</p>
               <input type="submit"/>
            </form>
        </div>
        </>
    )
}