import React from 'react'

import WorkingProcessBox from '../WorkingProcessBox/WorkingProcessBox'

import WORKING_PROCESS1 from "../../Assets/working-process1.png"
import WORKING_PROCESS2 from "../../Assets/working-process2.png"
import WORKING_PROCESS3 from "../../Assets/working-process3.png"
import WORKING_PROCESS4 from "../../Assets/working-process4.png"
import WORKING_PROCESS5 from "../../Assets/working-process5.png"
import WORKING_PROCESS6 from "../../Assets/working-process6.png"
import WORKING_PROCESS7 from "../../Assets/working-process7.png"
import WORKING_PROCESS8 from "../../Assets/working-process8.png"

import "./WorkingProcess.scss"

export default function WorkingProcess() {
    return (
        <div className='working-process-section'>
            <div className="working-process-container">
                <div className="working-process-container-heading">
                    Working Process
                </div>
                <div className="working-process-container-boxes">
                    <WorkingProcessBox step="1" title="Discovery & Research" description="Understand the project's pbjectives. Analyze competitors' websited, ans Define Target Audience." image={WORKING_PROCESS1} />
                    <WorkingProcessBox step="2" title="Wireframe" description="Create a hierarchical structure and devlop low-fidelity wireframes for layouts and content placement of the website." image={WORKING_PROCESS2} />
                    <WorkingProcessBox step="3" title="UI/UX Design" description="Create high-fidelity design mockups, define user journeys and interactions, and Ensure the design's accessibility standards." image={WORKING_PROCESS3} />
                    <WorkingProcessBox step="4" title="Front-End Development" description="Convert design mockups into React.js code and make it responsive for all devices." image={WORKING_PROCESS4} />
                    <WorkingProcessBox step="5" title="Back-End Development" description="Create a server-side code to implement he website's database struture and API development in Express.js." image={WORKING_PROCESS5} />
                    <WorkingProcessBox step="6" title="Integration & Testing" description="Connect the Front-End & Back-End, perform quality testing, and fix any issues and inconsistencies." image={WORKING_PROCESS6} />
                    <WorkingProcessBox step="7" title="Deployment" description="Choosing a web hosting service, configure the domain & implement SSl for security, and publish website publicly." image={WORKING_PROCESS7} />
                    <WorkingProcessBox step="8" title="Documentation & Handover" description="Creata user documentation for administrators and provide training and resources for the team taking over the project." image={WORKING_PROCESS8} />
                </div>
            </div>
        </div>
    )
}
