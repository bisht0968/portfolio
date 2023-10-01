import React from 'react'
import "./About.scss"

import { IoIosShareAlt } from "react-icons/io"

export default function AboutHome() {
    return (
        <div className='aboutHomeSection'>
            <div className="aboutHomeContent">
                <div className="text">
                    I'm <span>Rahul Bisht</span>, a highly motivated <span>Undergraduate</span> student pursuing a Bachelor's degree in Computer Science. My passion lies in technology and software development, specializing in <span>full-stack web design.</span> Currently, I'm exploring projects that merge AI and ML with <span>data structures and algorithms (DSA).</span> I excel at solving complex problems and thrive on collaborating with like-minded individuals to craft innovative solutions.
                    <br />
                    During my free time, you'll find me solving coding problems, playing football, and immersing myself in captivating novels—all while maintaining a balanced work-life routine. I'm enthusiastic about contributing my skills to impactful projects and connecting with fellow enthusiasts and professionals in the field.
                </div>
                <div className="resumeText">
                    <span>
                        View Full Resume <IoIosShareAlt />
                    </span>
                </div>
            </div>
        </div>
    )
}
