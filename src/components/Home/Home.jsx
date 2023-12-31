import React, { useEffect, useState } from 'react'
import "./Home.scss"
import About from "../About/About"

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { MdEmail } from "react-icons/md"
import { SiLeetcode, SiCodechef } from "react-icons/si"
import { Link, useNavigate } from "react-router-dom"
import Project from "../Project/Project"
import { IoIosShareAlt } from "react-icons/io"
import axios from 'axios'

export default function Home() {

    const [active, setActive] = useState('about')
    const navigate = useNavigate();
    const [projectData, setProjectData] = useState([]);
    const API = "http://127.0.0.1:8000/api/get/"

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 650) {
                setActive('projects');
            } else {
                setActive('about');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const getProjectData = async (url) => {
        try {
            const res = await axios.get(url)
            setProjectData(res.data.slice(0, 4))
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    useEffect(() => {
        getProjectData(API)
    }, [])

    return (
        <div className='homeSection '>
            <div className="homeContent">
                <div className="homeLeft">
                    <div className="homeText">
                        <div className="welcomeText">
                            WELCOME
                        </div>
                        <div className="nameText">
                            I'm Rahul Bisht
                        </div>
                        <div className="details">
                            Lead Engineer at UpState
                        </div>
                        <div className="navLinks">
                            <Link to={"https://github.com/bisht0968?tab=repositories"}
                                target='_blank'>
                                <AiFillGithub />
                            </Link>
                            <Link to={"https://github.com/bisht0968?tab=repositories"}
                                target='_blank'>
                                <MdEmail />
                            </Link>
                            <Link to={"https://www.linkedin.com/in/rahul-bisht-939204220/"}
                                target='_blank'>
                                <AiFillLinkedin />
                            </Link>
                            <Link to={"https://leetcode.com/bisht0968/"}
                                target='_blank'>
                                <SiLeetcode />
                            </Link>
                            <Link to={"https://www.codechef.com/users/bisht0968"}
                                target='_blank'>
                                <SiCodechef />
                            </Link>
                        </div>
                    </div>
                    <div className="homeNavigation">
                        <ul className="navigationItems">
                            <li className={`${active === 'about' ? 'activated' : ""}`} onClick={() => {
                                setActive('about')
                                window.scrollTo({
                                    top: 0, behavior: 'smooth'
                                })
                            }}>About</li>
                            <li className={`${active === "projects" ? 'activated' : ""}`} onClick={() => {
                                setActive('projects')
                                window.scrollTo({
                                    top: 650, behavior: 'smooth'
                                })
                            }}>Projects</li>
                        </ul>
                    </div>
                </div>
                <div className="homeRight">
                    <About />
                    <div className="projectsContainer">
                        {projectData !== null ? (
                            projectData.map((data) => (
                                <div className="projectCard" key={data.id}>
                                    <Project title={data.title} description={data.description} url={data.url} image={data.image} />
                                </div>
                            ))
                        ) : (
                            <p>Loading...</p>
                        )}
                        <div className="projectNavText">
                            <span onClick={() => {
                                navigate('/archive')
                                window.scrollTo({ top: 0, behavior: 'smooth' })
                            }}>
                                View Full Project Archive <IoIosShareAlt />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
