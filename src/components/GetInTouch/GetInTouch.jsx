import React from 'react'
import "./GetInTouch.scss"
import { useState } from 'react'
import { RxCross2 } from "react-icons/rx"

export default function GetInTouch({ setGetInTouch }) {

    const [submit, setSubmit] = useState(false);
    if (submit) {
        setTimeout(() => {
            setGetInTouch(false)
        }, [1000]);
    }

    return (
        <div className='getInTouchSection'>
            <div className="getInTouchContent">
                <div className="getIntTouchContainer">
                    <div className="title">Name*</div>
                    <input type="text" placeholder='Enter Your Name' required />
                    <div className="title">Email*</div>
                    <input type="email" placeholder='Enter Your Email' required />
                    <div className="title">Message*</div>
                    <textarea rows="4" cols="50" placeholder="Leave Your Message..." required />
                    <div className="button" onClick={() => setSubmit(true)}>Submit</div>
                    <div className="cross" onClick={() => setGetInTouch(false)}><RxCross2 /></div>
                    {submit && <div className="submitDialogueBox">
                        Thanks for submitting Your Response!
                    </div>}
                </div>
            </div>
        </div>
    )
}
