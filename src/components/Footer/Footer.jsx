import React from 'react'

import "./Footer.scss"

export default function Footer() {


    const handleScrollTo = (goto) => {
        if (goto === "about-me") {
            window.scrollTo({
                top: 2450,
                behavior: "smooth",
            });
        } else if (goto === "projects") {
            window.scrollTo({
                top: 1300,
                behavior: "smooth",
            });
        } else if (goto === "top") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className='footer-section'>
            <div className="footer-container">
                <div className="footer-container-left">
                    A Ayvid
                </div>
                <div className="footer-conatiner-right">
                    <div className="footer-container-right-left">
                        <h4>Personal</h4>

                        <div className="footer-container-right-left-items">

                            <p onClick={() => {
                                handleScrollTo("projects")
                            }}>Projects</p>
                            <p onClick={() => {
                                handleScrollTo("about-me")
                            }}>About Me</p>
                            <p onClick={() => {
                                handleScrollTo("top")
                            }}>Portfolio</p>
                        </div>
                    </div>

                    <div className="footer-container-right-right">
                        <h4>Contact</h4>
                        <div className="footer-container-right-right-items">
                            <a href='https://www.linkedin.com/in/rahul-bisht-939204220/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
                            <a href='https://github.com/bisht0968' target='_blank' rel='noopener noreferrer'>GitHub</a>
                            <p>rahubist0968@gmail.com</p>
                            <p>+91 94111 97602</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
