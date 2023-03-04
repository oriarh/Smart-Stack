import React, { useState } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

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
               <label>Name:</label><br/>
               <input className="inputName" type='text'/> <br/><br/>
               <label>Email Address:</label><br/>
               <input className="inputEmail"  value={data.email} type='email' onChange={handleOnChange} name="email" /><br/><br/>
               <label>Password:</label><br/>
               <textarea className="inputPassword" value={data.password} onChange={handleOnChange} name= "myPassword" /><br/>
               <p id="errorMessage"></p>
               <p>{errorEmail}</p>
               <p>{errorMessage}</p>
               <input type="submit"/>
            </form>
        </div>
        <Footer />
        </>
    )
}