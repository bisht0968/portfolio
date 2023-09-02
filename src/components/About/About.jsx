import React from 'react'
import "./About.scss"

import { IoIosShareAlt } from "react-icons/io"

export default function AboutHome() {
    return (
        <div className='aboutHomeSection'>
            <div className="aboutHomeContent">
                <div className="text">
                    I'm <span>Rahul Bisht </span>, a highly motivated third-year student pursuing a Bachelor's degree in Computer Science. With a deep passion for technology and software development, I specialize in full-stack web designing and am currently exploring projects integrating AI and ML with DSA. Constantly seeking to stay at the forefront of technological advancements, I thrive on solving complex problems and collaborating with like-minded individuals to create innovative solutions. In my free time, you'll find me cooking, playing football, and diving into captivating novels, all while maintaining a healthy work-life balance. I'm excited about contributing my skills to impactful projects and connecting with fellow enthusiasts and professionals in the field.
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
