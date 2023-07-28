import React from 'react'
import "./Home.scss"
import profilePhoto from "../../Assets/passport.jpg"
import AboutHome from './About/AboutHome'
import ProjectsHome from './ProjectsHome/ProjectsHome'
import SkillsHome from './SkillsHome/SkillsHome'
import Header from '../Header/Header';

export default function Home() {
    return (
        <>
            <Header home={true} />
            <div className='homeSection'>
                <div className="homeContent">
                    <div className="homeLeft">
                        <div className="name">
                            <span className='firstText'>Hello,</span>
                            <span className='secondText'>I'm Rahul Bisht.</span>
                        </div>
                        <div className="buttons">
                            <div className="button">
                                Read more
                            </div>
                            <div className="button">
                                Download CV
                            </div>
                        </div>
                    </div>
                    <div className="homeRight">
                        <div className="image">
                            <img src={profilePhoto} alt="ProfilePhoto" />
                        </div>
                    </div>
                </div>
                <hr className="separator" />
                <AboutHome />
                <hr className="separator" />
                <ProjectsHome />
                <hr className="separator" />
                <SkillsHome />
            </div>
        </>
    )
}
