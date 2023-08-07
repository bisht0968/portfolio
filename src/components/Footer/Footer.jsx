import React from 'react'
import { HiOutlineMailOpen } from "react-icons/hi"
import { BsFillTelephoneFill, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs"
import { AiOutlineHome } from "react-icons/ai"
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si"
import "./Footer.scss"
import { useNavigate } from 'react-router-dom'


export default function Footer() {

    const navigate = useNavigate();

    return (
        <div className='footerSection'>
            <div className="footerContent">
                <div className="section linkSection">
                    <li onClick={async () => await window.scrollTo({ top: 0, behavior: 'smooth' })}>Top</li>
                    <li onClick={() => navigate('/projects')}>Projects</li>
                    <li onClick={() => navigate('/about')}>About</li>
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
                        <span className="footerIcon" >
                            <a href="https://www.linkedin.com/in/rahul-bisht-939204220/" target='_blank' rel="noreferrer">
                                <BsLinkedin />
                            </a>
                        </span>
                        {/* <span className="footerIcon">
                            <a href="/" target='_blank' rel="noreferrer">
                                <BsTwitter />
                            </a>
                        </span> */}
                        <span className="footerIcon">
                            <a href="https://github.com/bisht0968" target='_blank' rel="noreferrer">
                                <BsGithub />
                            </a>
                        </span>
                        <span className="footerIcon">
                            <a href="https://leetcode.com/bisht0968/" target='_blank' rel="noreferrer">
                                <SiLeetcode />
                            </a>
                        </span>
                        <span className="footerIcon">
                            <a href="https://auth.geeksforgeeks.org/user/bisht0968" target='_blank' rel="noreferrer">
                                <SiGeeksforgeeks />
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
