import React from 'react'
import "./Projects.scss"
import Header from '../Header/Header'
import Project from './Project/Project'
import { useNavigate } from 'react-router-dom'

export default function Projects({ setGetInTouchBackGroundColor }) {

    const navigate = useNavigate();

    return (
        <>
            <Header projects={true} setGetInTouchBackGroundColor={setGetInTouchBackGroundColor} />
            <div className='projectsSection'>
                <div className="projectsContent">
                    <div className="projectsContainer">
                        <div className="projectsTitle">
                            Projects
                        </div>
                        <a href="https://www.google.com" target='_blank' rel='noreferrer'>
                            <Project />
                        </a>
                        <Project />
                    </div>
                    <hr />
                    <div className="projectsButtons">
                        <div className="button" onClick={() => {
                            navigate('/about')
                            window.scrollTo({ top: 0, behavior: "smooth" })
                        }}>About</div>
                        <div className="button invertButton" onClick={() => {
                            navigate('/skills')
                            window.scrollTo({ top: 0, behavior: "smooth" })
                        }}>Skills</div>
                    </div>
                </div>
            </div>
        </>
    )
}
