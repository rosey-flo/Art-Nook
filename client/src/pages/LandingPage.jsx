import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

import '../index.scss'



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

            </nav>
            <div className="center-content">
                <button className="btn enter-button basicfont" onClick={handleEnterGallery}>Enter Gallery</button>
            </div>
        </div >
    )

};

export default LandingPage;


