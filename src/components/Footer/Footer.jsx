import React from 'react'
import { HiOutlineMailOpen } from "react-icons/hi"
import { BsFillTelephoneFill, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs"
import { AiOutlineHome } from "react-icons/ai"
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si"
import "./Footer.scss"

export default function Footer() {
    return (
        <div className='footerSection'>
            <div className="footerContent">
                <div className="section">
                    <li>Home</li>
                    <li>Projects</li>
                    <li>About</li>
                </div>
                <div className="section">
                    Contact
                    <li className='contactItems'>
                        <span>
                            <HiOutlineMailOpen />
                        </span>
                        <span className="footerText">
                            rahubisht0968@gmail.com
                        </span>
                    </li>
                    <li className='contactItems'>
                        <span>
                            <BsFillTelephoneFill />
                        </span>
                        <span className="footerText">
                            9411197602
                        </span>
                    </li>
                    <li className='contactItems'>
                        <span>
                            <AiOutlineHome />
                        </span>
                        <span className="footerText">
                            Graphic Era Hill University, Dehradun, Uttarakhand
                        </span>
                    </li>
                </div>
                <div className="section">
                    <div className='footerIcons'>
                        <span className="footerIcon">
                            <BsLinkedin />
                        </span>
                        <span className="footerIcon">
                            <BsTwitter />
                        </span>
                        <span className="footerIcon">
                            <BsGithub />
                        </span>
                        <span className="footerIcon">
                            <SiLeetcode />
                        </span>
                        <span className="footerIcon">
                            <SiGeeksforgeeks />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
