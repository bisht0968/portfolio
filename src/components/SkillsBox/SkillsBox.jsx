import React from 'react'

import "./SkillsBox.scss"

export default function SkillsBox({ skill_name, skills_img }) {
    return (
        <div className='skills-box-section'>
            <div className="skills-box-container">

                <div className="skills-box-img">
                    <img src={skills_img} alt="" />
                </div>
                <div className="skills-box-text">
                    {skill_name}
                </div>
            </div>
        </div>
    )
}
