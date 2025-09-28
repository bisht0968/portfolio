import React from 'react'

import ProjectBox from '../ProjectBox/ProjectBox'

import "./Projects.scss"

import PROJECT1_IMG from "../../Assets/project1.png"
import PROJECT2_IMG from "../../Assets/project2.png"
import PROJECT3_IMG from "../../Assets/project3.png"

export default function Projects() {
    return (
        <div className='projects-section'>
            <div className="projects-container">
                <div className="projects-container-heading">
                    My Projects
                </div>
                <div className="projects-container-box">
                    <ProjectBox title="Lovable2Hearts" description={
                        <>
                            <span>Lovable2Hearts</span> is an e-commerce platform featuring secure authentication, product management, cart, and checkout functionality. It delivers a seamless shopping experience with <span>responsive design</span>  and real-time order handling.
                        </>
                    }
                        skills={["MongoDB", "Express.js", "Node.js", "React.js"]} link={"https://lovable2hearts.vercel.app/"} thumbnail={PROJECT1_IMG} github={"https://github.com/bisht0968/lovable2hearts"} />
                </div>
                <div className="projects-container-box">
                    <ProjectBox title="Video-Portal" description={
                        <>
                            A <span>video streaming</span> platform that supports user authentication, video upload, playback, and interactive features. Designed with <span>scalability</span> and <span> responsiveness</span>, it delivers a smooth, Netflix-like streaming experience across devices.
                        </>
                    }
                        skills={["MongoDB", "Express.js", "Node.js", "React.js"]} link={"https://video-portal-client.vercel.app/"} thumbnail={PROJECT2_IMG} github={"https://github.com/bisht0968/video-portal-client"} />
                </div>
                <div className="projects-container-box">
                    <ProjectBox title="Movie Recommendor" description={
                        <>
                            An <span> AI-powered</span> movie recommendation system combining <span> machine learning</span> with user preferences. It analyzes viewing patterns, ratings, and tags to suggest personalized movies, enhancing user experience with intelligent, data-driven recommendations.
                        </>
                    } skills={["Streamlit", "Python", "Machine Learning"]} link={"https://movie-recommendation-sqse5pjldgyhdphe4aozus.streamlit.app/"} thumbnail={PROJECT3_IMG} github={"https://github.com/bisht0968/movie-recommendation"} />
                </div>
            </div>
        </div>
    )
}
