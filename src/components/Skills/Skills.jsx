import React from 'react'
import "./Skills.scss"
import Header from '../Header/Header'

export default function Skills({ setGetInTouchBackGroundColor }) {
    return (
        <>
            <Header about={true} setGetInTouchBackGroundColor={setGetInTouchBackGroundColor} />
            <div className='skillsSection'>
                <div className="skillsContent">
                    Skills
                </div>
            </div>
        </>
    )
}
