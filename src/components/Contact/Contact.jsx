import React from 'react'

import "./Contact.scss"

export default function Contact({ setDisplayContactPage }) {

    const handleOnClick = () => {
        setDisplayContactPage(false)
    }

    return (
        <div className='contact-section'>
            <div className="contact-container">
                <div className="contact-container-heading">
                    Lets Connect
                </div>
                <div className="contact-container-description">
                    Feel free to reach out to me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </div>
                <div className="contact-container-boxes">
                    <div className="contact-container-box contact-container-box-button">
                        <a href="https://www.linkedin.com/in/rahul-bisht-939204220/" target='_blank' rel="noopener noreferrer">LinkedIn</a>
                    </div>
                    <div className="contact-container-box contact-container-box-button">
                        <a href="https://github.com/bisht0968" target='_blank' rel="noopener noreferrer">GitHub</a>
                    </div>
                    <div className="contact-container-box">
                        rahubisht0968@gmail.com
                    </div>
                    <div className="contact-container-box">
                        +91 94111 97602
                    </div>
                </div>

                <span onClick={handleOnClick} className="contact-container-cross-button">
                    X
                </span>
            </div>
        </div>
    )
}
