import React from 'react'
import "./About.scss"
import Header from '../Header/Header'

export default function About() {
    return (
        <>
            <Header about={true} />
            <div>
                About
            </div>
        </>
    )
}
