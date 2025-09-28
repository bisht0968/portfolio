import React from 'react'
import "./About.scss"

import bannerIMG from "../../Assets/banner-img.png"

export default function About() {
    return (
        <div className='about-section'>
            <div className="about-container">
                <div className="about-container-image">
                    <img src={bannerIMG} alt="Hero Photo" />
                </div>
                <div className="about-container-text">
                    <div className="about-container-text-heading">
                        About Me
                    </div>
                    <div className="about-container-text-description">
                        <p>
                            I’m a <span>MERN stack developer</span> passionate about building scalable and modern web applications. My work includes e-commerce platforms, video streaming apps, and innovative projects powered by <span>ML</span>.
                        </p>
                        <p>
                            Currently, I’m exploring <span>Machine Learning</span> and <span>Generative AI</span> to create intelligent, data-driven solutions. I enjoy blending web technologies with <span>AI</span> to solve real-world challenges and deliver impactful user experiences.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
