import React from 'react'
import "./ProjectArchive.scss"
import { AiOutlineArrowLeft } from 'react-icons/ai'
import ProjectArchiveItem from './ProjectArchiveItem/ProjectArchiveItem'
import { useNavigate } from 'react-router-dom'

export default function ProjectArchive() {

    const navigate = useNavigate();

    return (
        <div className='projectArchiveSection'>
            <div className="projectArchiveContent">
                <div className="text">
                    <span className="navText" onClick={() => navigate('/')}>
                        <AiOutlineArrowLeft />  Rahul Bisht
                    </span>
                    <span className="heading">
                        All Projects
                    </span>
                </div>
                <div className="projectArchiveContainer">
                    <div className="containerLabels">
                        <span className='yearLabel'>
                            Year
                        </span>
                        <span>
                            Project
                        </span>
                        <span className='builtWithContainerLabel'>
                            Built with
                        </span>
                        <span>
                            Link
                        </span>
                    </div>
                    <div className="projectArchiveItems">
                        <ProjectArchiveItem />
                        <ProjectArchiveItem />
                        <ProjectArchiveItem />
                        <ProjectArchiveItem />
                        <ProjectArchiveItem />
                        <ProjectArchiveItem />
                    </div>
                </div>
            </div>
        </div>
    )
}
