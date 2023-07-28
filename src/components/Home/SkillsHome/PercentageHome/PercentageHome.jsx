import React from 'react'
import "./PercentageHome.scss"

export default function PercentageHome({ percentage, color }) {
    return (
        <div className='percentageSection'>
            <div className="percentageContent">
                <div className="percentageBar" style={{
                    width: `${percentage}%`,
                    backgroundColor: `${color}`
                }}></div>
            </div>
        </div>
    )
}
