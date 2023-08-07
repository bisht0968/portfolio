import React from 'react'
import "./About.scss"
import Header from '../Header/Header'
import { useNavigate } from 'react-router-dom'

export default function About({ setGetInTouchBackGroundColor }) {

    const navigate = useNavigate();

    return (
        <>
            <Header about={true} setGetInTouchBackGroundColor={setGetInTouchBackGroundColor} />
            <div className='aboutSection'>
                <div className="aboutContent">
                    <div className="section">
                        <div className="about">
                            <div className="title">About</div>
                            <div className="text">I'm Rahul Bisht, a highly motivated third-year student pursuing a Bachelor's degree in Computer Science. With a deep passion for technology and software development, I specialize in full-stack web designing and am currently exploring projects integrating AI and ML with DSA. Constantly seeking to stay at the forefront of technological advancements, I thrive on solving complex problems and collaborating with like-minded individuals to create innovative solutions. In my free time, you'll find me cooking, playing football, and diving into captivating novels, all while maintaining a healthy work-life balance. I'm excited about contributing my skills to impactful projects and connecting with fellow enthusiasts and professionals in the field.</div>
                        </div>
                    </div>
                    <hr className="separator" />
                    <div className="section">
                        <div className="education">
                            <div className="title">Education</div>
                            <div className="text">
                                <ol>
                                    <li>
                                        Bachelor of Technology (B.Tech) in Computer Science and Engineering
                                        <ul>
                                            <li>
                                                Graphic Era Hill University, Dehradun
                                            </li>
                                            <li>
                                                2021 - 2025
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        12th Grade (Senior Secondary Education) with Computer Science as an optional subject
                                        <ul >
                                            <li>
                                                St. Joseph's College, Nainital
                                            </li>
                                            <li>
                                                2020
                                            </li>
                                        </ul>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <hr className="separator" />
                    <div className="section">
                        <div className="experience">
                            <div className="title">Experience</div>
                            <div className="text">
                                <ol>
                                    <li>
                                        Full-Stack Web Developer (Freelance)
                                        <ul>
                                            <li>
                                                Duration: 2021 - Present
                                            </li>
                                            <li>
                                                Description: Developed and deployed multiple self-made projects, including:
                                                <ul>
                                                    <li>
                                                        E-commerce Website: Created a fully functional e-commerce platform with React.js, enabling users to browse products, add them to the cart, and complete the purchase process.
                                                    </li>
                                                    <li>
                                                        Netflix Clone: Built a Netflix clone using React.js, allowing users to view movie trailers and search for their favorite shows and movies.
                                                    </li>
                                                    <li>
                                                        Amazon Clone: Developed an Amazon-like e-commerce website with React.js, providing users with product listings, reviews, and the ability to add items to the cart.
                                                    </li>
                                                    <li>
                                                        Portfolio Website: Designed and implemented a personal portfolio website showcasing projects and skills using React.js.
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <hr className="separator" />
                    <div className="section">
                        <div className="thankYou">
                            <div className="title">Thank You</div>
                            <div className="text">
                                Thank you for visiting my portfolio! I'm thrilled to have you here. As you explore through my projects, I hope you find inspiration and insights into my passion for web development and the world of technology. <br /><br />
                                Make sure to check out the Project section, where I've showcased some of my self-made projects, including an e-commerce website, Netflix clone, Amazon clone, and my very own portfolio website. Each project represents a unique challenge and a testament to my proficiency in React.js and other cutting-edge technologies. <br /><br />
                                Don't miss the Home section, where you'll find a glimpse of who I am and what drives me in the world of coding. I believe in creating innovative and user-friendly solutions that leave a positive impact on the lives of users. <br /><br />
                                In the Skills section, you'll discover a comprehensive list of my abilities, ranging from front-end technologies like React.js to back-end skills like MongoDB CRUD operations. My dedication to continuous learning empowers me to adapt and excel in this ever-evolving industry. <br /><br />
                                If you're interested in collaborating or have exciting opportunities to discuss, please don't hesitate to reach out to me. I'm always eager to take on new challenges and contribute my expertise to meaningful projects. <br /><br />
                                Once again, thank you for visiting, and I hope to connect with you soon!
                                <br />
                                Best regards, <br />
                                Rahul Bisht
                            </div>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <div className="button" onClick={() => {
                        navigate('/projects')
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    }}>Projects</div>
                    <div className="button invertButton " onClick={() => {
                        navigate('/skills')
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    }}>Skills</div>
                </div>
            </div>
        </>
    )
}
