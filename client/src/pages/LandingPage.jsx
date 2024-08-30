import React, { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom'

import './LandingPage.scss';


const LandingPage = () => {
    const [fadeOut, setFadeOut] = useState(false);
    const navigate = useNavigate();

    const handleEnterGallery = () => {
        setFadeOut(true);
        setTimeout(() => {
            navigate('/homepage'); // redirect to homepage after fade out
        }, 1000); // match time with animation duration
    };

    return (
        <div className={`landing-page ${fadeOut ? 'fade-out' : ''}`}>
            <nav className="top-nav">
                <NavLink className="nav-link" to="/login">Login</NavLink>
                <NavLink className="nav-link" to="/login">Register</NavLink>
            </nav>
            <div className="center-content">
                <button className="enter-button" onClick={handleEnterGallery}>Enter Gallery</button>
            </div>
        </div>
    )
};

export default LandingPage;


