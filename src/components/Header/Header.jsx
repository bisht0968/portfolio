import React, { useEffect } from 'react'
import "./Header.scss"
import GetInTouch from '../GetInTouch/GetInTouch'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Header({ home, projects, about, setGetInTouchBackGroundColor }) {

    const navigate = useNavigate();

    const [getInTouch, setGetInTouch] = useState(false);

    useEffect(() => {
        if (getInTouch) {
            setGetInTouchBackGroundColor(true)
            const header = document.getElementById("header")
            header.classList.add("visible")

        } else {
            setGetInTouchBackGroundColor(false)
            const header = document.getElementById("header")
            header.classList.remove("visible")
        }
    }, [getInTouch, setGetInTouchBackGroundColor])

    const handleGetInTouch = () => {
        if (!getInTouch) {
            setGetInTouch(true);
        } else {
            setGetInTouch(false);
        }
    }

    return (
        <>
            <div id='header' className='headerSection index'>
                <div className="headerContent">
                    <div className="navbarItems">
                        {home && (
                            <>
                                <li onClick={() => navigate('/projects')}>Projects</li>
                                <li onClick={() => navigate('/about')}>About</li>
                            </>
                        )
                        }
                        {projects && (
                            <>
                                <li onClick={() => navigate('/')}>Home</li>
                                <li onClick={() => navigate('/about')}>About</li>
                            </>
                        )
                        }
                        {about && (
                            <>
                                <li onClick={() => navigate('/')}>Home</li>
                                <li onClick={() => navigate('/projects')}>Projects</li>
                            </>
                        )
                        }
                    </div>
                    <div className="navbarButton" onClick={handleGetInTouch}>
                        Get In Touch
                    </div>
                </div>
            </div >
            {getInTouch && <GetInTouch setGetInTouch={setGetInTouch} />}
        </>
    )
}
