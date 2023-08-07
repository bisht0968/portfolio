import React from 'react'
import "./Project.scss"
import Pic from "../../../Assets/passport.jpg"

export default function Project() {
    return (
        <div className='projectSection'>
            <div className="projectContent">
                <div className="projectContainer">
                    <div className="productImage">
                        <img src={Pic} alt="" />
                    </div>
                    <div className="projectDescription">
                        <div className="productTitle">
                            E Commerce
                        </div>
                        <div className="productText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto unde temporibus exercitationem quo blanditiis asperiores labore ipsa incidunt optio ipsam.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
