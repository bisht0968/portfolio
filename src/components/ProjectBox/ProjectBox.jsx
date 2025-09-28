import React from 'react'

import "./ProjectBox.scss"

export default function ProjectBox({ title, description, skills, link, thumbnail, github }) {
    return (
        <div className='project-box-section'>
            <div className="project-box-container">

                <div className="project-box-container-left">
                    <div className="project-box-container-left-title">
                        {title}
                    </div>
                    <div className="project-box-container-left-description">
                        {description}
                    </div>
                    <div className="project-box-container-left-skills">

                        {skills?.map((skill, index) => (
                            <div className="project-box-container-left-skill-item" key={index}>
                                {skill}
                            </div>
                        ))}
                    </div>
                    <div className="project-box-container-left-buttons">
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            Link
                        </a>
                        <a href={github} target="_blank" rel="noopener noreferrer">
                            Github
                        </a>
                    </div>

                </div>

                <div className="project-box-container-right">
                    <div className="project-box-container-right-img">
                        <img src={thumbnail} alt="img" />
                    </div>
                </div>
            </div>

        </div>
    )
}
