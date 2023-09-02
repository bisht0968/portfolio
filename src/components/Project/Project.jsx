import React from 'react'
import "./Project.scss"
import Pic from "../../Assets/passport.jpg"
import { FiArrowUpRight } from "react-icons/fi"

export default function Project() {
    return (
        <div className='projectSection'>
            <div className="projectContent">
                <div className="projectContainer">
                    <div className="prjectImage">
                        <img src={Pic} alt="" />
                    </div>
                    <div className="projectDescription">
                        <div className="projectTitle">
                            E Commerce <span><FiArrowUpRight /></span>
                        </div>
                        <div className="projectText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto unde temporibus exercitationem quo blanditiis asperiores labore ipsa incidunt optio ipsam.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
