import React from 'react'
import "./Project.scss"
import { FiArrowUpRight } from "react-icons/fi"

export default function Project({ title, description, url, image }) {
    return (
        <div className='projectSection'>
            <div className="projectContent">
                <div className="projectContainer" onClick={() => {
                    window.open(url, '_blank');
                }}>
                    <div className="prjectImage">
                        <img src={`http://127.0.0.1:8000/${image}`} alt={title} />
                    </div>
                    <div className="projectDescription">
                        <div className="projectTitle">
                            {title} <span><FiArrowUpRight /></span>
                        </div>
                        <div className="projectText">{description}</div>
                    </div>
                </div>
            </div>
        </div >
    )
}
