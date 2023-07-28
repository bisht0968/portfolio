import React from 'react'
import "./ProjectsHome.scss"
import ProjectHome from './ProjectHome/ProjectHome'

export default function ProjectsHome() {
    return (
        <div className='projectsSection'>
            <div className="projectsContent">
                <div className="title">
                    <h1>Projects</h1>
                </div>
                <div className="projectsContainer">
                    <ProjectHome />
                    <ProjectHome />
                    <ProjectHome />
                    <ProjectHome />
                    <ProjectHome />
                    <ProjectHome />
                    <ProjectHome />
                    <ProjectHome />
                </div>
                <div className="projectsButton">
                    <div className="button">
                        Click for More Projects
                    </div>
                </div>
            </div>
        </div>
    )
}
