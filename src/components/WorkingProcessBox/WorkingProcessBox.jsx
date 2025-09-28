import React from 'react'

import "./WorkingProcessBox.scss"

export default function WorkingProcessBox({ title, description, image }) {
    return (
        <div className='working-process-box-section'>
            <div className="working-process-box-container">
                <div className="working-process-box-container-image">
                    <img src={image} alt="" />
                </div>
                <div className="working-process-box-container-title">
                    {title}
                </div>
                <div className="working-process-box-container-description">
                    {description}
                </div>
            </div>
        </div>
    )
}
