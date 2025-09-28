import React, { useState } from 'react'

import "./Hero.scss"

import BannerImg from "../../Assets/banner-img.png"
import Contact from '../Contact/Contact';
export default function Hero() {

    const [displayContactPage, setDisplayContactPage] = useState(false);

    const handleOnClick = () => {
        setDisplayContactPage(true);
    }

    return (
        <div className='hero-section'>
            <div className="hero-container">
                <div className="hero-container-image">
                    <img src={BannerImg} alt="hero image" />
                </div>
                <div className="hero-container-text">
                    <h1><span>Full-Stack Developer</span> <span> ML & GenAI Engineer</span></h1>
                    <p>I build intelligent web apps using the MERN stack, Python, and cutting-edge AI.</p>
                    <h4>Rahul Bisht</h4>
                    <div className='hero-container-buttons'>
                        <button className='.gradient-bottom-border hero-container-buttons-1' onClick={handleOnClick}>Hire Me!</button>
                        <button className='hero-container-buttons-2'>See My Resume/CV</button>
                    </div>
                </div>
            </div>

            {displayContactPage && <Contact setDisplayContactPage={setDisplayContactPage} />}
        </div>
    )
}
