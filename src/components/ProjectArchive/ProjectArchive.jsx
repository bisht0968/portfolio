import React, { useEffect, useState } from 'react'
import "./ProjectArchive.scss"
import { AiOutlineArrowLeft } from 'react-icons/ai'
import ProjectArchiveItem from './ProjectArchiveItem/ProjectArchiveItem'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function ProjectArchive() {

    const [projectData, setProjectData] = useState([]);
    const API = "http://127.0.0.1:8000/api/get/"


    const getProjectData = async (url) => {
        try {
            const res = await axios.get(url)
            setProjectData(res.data)
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    useEffect(() => {
        getProjectData(API)
    }, [])

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
                        {projectData !== null ? (
                            projectData.map((data) => (
                                <div className="projectCard" key={data.id}>
                                    <ProjectArchiveItem data={data} />
                                </div>
                            ))
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
