import React from 'react'
import "./ProjectsHome.scss"
import { useNavigate } from 'react-router-dom'
import ProjectHome from './ProjectHome/ProjectHome'

export default function ProjectsHome() {

    const navigate = useNavigate();

    return (
        <div className='projectsHomeSection'>
            <div className="projectsHomeContent">
                <div className="title">
                    <h1>Projects</h1>
                </div>
                <div className="projectsHomeContainer">
                    <ProjectHome />
                </div>
                <div className="projectsHomeButton">
                    <div className="button" onClick={() => navigate("/projects")}>
                        Click for More Projects
                    </div>
                </div>
            </div>
        </div>
    )
}
