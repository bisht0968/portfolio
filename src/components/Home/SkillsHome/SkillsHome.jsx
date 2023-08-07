import React from 'react'
import "./SkillsHome.scss"
import PercentageHome from './PercentageHome/PercentageHome'
import { useNavigate } from 'react-router-dom'

export default function Skills() {

    const navigate = useNavigate();

    return (
        <div className='skillsHomeSection'>
            <div className="skillsHomeContent">
                <div className="title">
                    <h1>Skills</h1>
                </div>
                <div className="skillsHomeGraph">
                    <div className="skill">
                        <div className="skillHomeText">
                            C
                        </div>
                        <PercentageHome percentage={80} color={"blue"} />
                    </div>
                    <div className="skillHome">
                        <div className="skillHomeText">
                            Cpp
                        </div>
                        <PercentageHome percentage={50} color={"red"} />
                    </div>
                    <div className="skillHome">
                        <div className="skillHomeText">
                            React Js
                        </div>
                        <PercentageHome percentage={82} color={"grey"} />
                    </div>
                    <div className="skillHome">
                        <div className="skillHomeText">
                            Mongo DB
                        </div>
                        <PercentageHome percentage={20} color={"black"} />
                    </div>
                    <div className="skillHome">
                        <div className="skillHomeText">
                            DSA
                        </div>
                        <PercentageHome percentage={76} color={"green"} />
                    </div>
                </div>
                <div className="skillsHomeButton">
                    <div className="button" onClick={() => navigate("/skills")}>
                        Click Here for Skills
                    </div>
                </div>
            </div>
        </div >
    )
}
