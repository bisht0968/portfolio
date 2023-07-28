import React from 'react'
import "./Header.scss"
import { useNavigate } from "react-router-dom";

export default function Header({ home, projects, about }) {

    const navigate = useNavigate();

    return (
        <div className='headerSection'>
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
                <div className="navbarButton">
                    Get In Touch
                </div>
            </div>
        </div >
    )
}
