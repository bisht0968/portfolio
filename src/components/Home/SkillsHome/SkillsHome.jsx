import React from 'react'
import "./SkillsHome.scss"
import PercentageHome from './PercentageHome/PercentageHome'

export default function Skills() {
    return (
        <div className='skillsSection'>
            <div className="skillsContent">
                <div className="title">
                    <h1>Skills</h1>
                </div>
                <div className="skillsGraph">
                    <div className="skill">
                        <div className="skillText">
                            C
                        </div>
                        <PercentageHome percentage={80} color={"blue"} />
                    </div>
                    <div className="skill">
                        <div className="skillText">
                            Cpp
                        </div>
                        <PercentageHome percentage={50} color={"red"} />
                    </div>
                    <div className="skill">
                        <div className="skillText">
                            React Js
                        </div>
                        <PercentageHome percentage={82} color={"grey"} />
                    </div>
                    <div className="skill">
                        <div className="skillText">
                            Mongo DB
                        </div>
                        <PercentageHome percentage={20} color={"black"} />
                    </div>
                    <div className="skill">
                        <div className="skillText">
                            DSA
                        </div>
                        <PercentageHome percentage={76} color={"green"} />
                    </div>
                </div>
                <div className="skillsButton">
                    <div className="button">
                        Click Here for Skills
                    </div>
                </div>
            </div>
        </div >
    )
}
