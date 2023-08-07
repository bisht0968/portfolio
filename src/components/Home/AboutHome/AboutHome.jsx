import React from 'react'
import "./AboutHome.scss"
import { useNavigate } from 'react-router-dom'

export default function About() {

    const navigate = useNavigate();

    return (
        <div className='aboutHomeSection'>
            <div className="aboutHomeContent">
                <div className="title">
                    <h1>About</h1>
                </div>
                <div className="text">
                    Hello, I'm Rahul Bisht, a passionate 3rd-year Computer Science Engineering student. Proficient in C, C++, ReactJS, and MongoDB, my expertise lies in creating exceptional and functional websites. With a keen eye for design and a love for problem-solving, I strive to craft wonderful and user-friendly online experiences. Let's bring your ideas to life!...
                    <div className='readMoreButton'>
                        <div className="button" onClick={() => navigate('/about')}>
                            Read More
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
