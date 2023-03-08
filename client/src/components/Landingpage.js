import React from 'react'
import { Link, useMatch, useResolvedPath} from 'react-router-dom'
import Navigation from './Navigation'
import backgroundImg from '../images/backgroundImg.jpg'
import Footer from './Footer'

export default function () {

    return (
    <>
        <Navigation/>
        <div className="imgContainer">
            <div className="welcomeMessage">Welcome to Smart Stacks</div>
            <img id="topImg" src={backgroundImg} alt="Background Image"/>
        </div>
        <Footer />
    </>
    )
}