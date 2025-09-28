import React from 'react'
import SkillsBox from '../SkillsBox/SkillsBox'
import HTML_IMG from "../../Assets/html.png"
import CSS_IMG from "../../Assets/css.png"
import JS_IMG from "../../Assets/js.png"
import REACT_IMG from "../../Assets/react.png"
import NODE_IMG from "../../Assets/node.png"
import MONGODB_IMG from "../../Assets/mongodb.png"
import EXPRESS_IMG from "../../Assets/express.png"
import ML_IMG from "../../Assets/ml.png"
import GENAI_IMG from "../../Assets/gen ai.png"
import CPP_IMG from "../../Assets/cpp.png"
import JAVA_IMG from "../../Assets/java.png"

import "./Skills.scss"

export default function Skills() {
    return (
        <div className='skills-section'>
            <div className="skills-container">
                <div className="skills-container-text">
                    My Skills
                </div>
                <div className="skills-container-box">
                    <SkillsBox skill_name="HTML 5" skills_img={HTML_IMG} />
                    <SkillsBox skill_name="CSS" skills_img={CSS_IMG} />
                    <SkillsBox skill_name="JavaScript" skills_img={JS_IMG} />
                    <SkillsBox skill_name="React.js" skills_img={REACT_IMG} />
                    <SkillsBox skill_name="Node.js" skills_img={NODE_IMG} />
                    <SkillsBox skill_name="Mongo DB" skills_img={MONGODB_IMG} />
                    <SkillsBox skill_name="Express.js" skills_img={EXPRESS_IMG} />
                    <SkillsBox skill_name="ML" skills_img={ML_IMG} />
                    <SkillsBox skill_name="Gen AI" skills_img={GENAI_IMG} />
                    <SkillsBox skill_name="CPP" skills_img={CPP_IMG} />
                    <SkillsBox skill_name="Java" skills_img={JAVA_IMG} />
                </div>
            </div>
        </div>
    )
}
