import React from 'react'
import "./ProjectHome.scss"
import Pic from "../../../../Assets/passport.jpg"

export default function ProjectHome() {
    return (
        <div className='projectSection'>
            <div className="projectContent">
                <div className="project">
                    <div className="projectImg">
                        <img src={Pic} alt="" />
                    </div>
                    <div className="projectTitle">
                        E-Commerce
                    </div>
                </div>
            </div>
        </div>
    )
}
