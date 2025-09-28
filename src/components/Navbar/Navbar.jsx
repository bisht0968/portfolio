import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import Contact from "../Contact/Contact";

export default function Navbar() {

    const [scrolled, setScrolled] = useState(false);

    const [displayContactPage, setDisplayContactPage] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const handleScrollTo = (goto) => {
        if (goto === "about-me") {
            window.scrollTo({
                top: 2450,
                behavior: "smooth",
            });
        } else if (goto === "projects") {
            window.scrollTo({
                top: 1300,
                behavior: "smooth",
            });
        } else if (goto === "contact") {
            setDisplayContactPage(true)
        }
    };

    return (
        <div className={`navbar-section ${scrolled ? "scrolled" : ""}`}>
            <div className="navbar-container gradient-bottom-border">
                <div className="navbar-logo">
                    A
                    Ayvid
                </div>
                <nav className="navbar-items">
                    <ul>
                        <li onClick={() => {
                            handleScrollTo("about-me")
                        }}>
                            About Me
                        </li>
                        <li onClick={() => {
                            handleScrollTo("projects")
                        }}>Projects</li>
                    </ul>
                </nav>
                <div className="navbar-contact" onClick={() => {
                    handleScrollTo("contact")
                }}>
                    Contact
                </div>
            </div>

            {displayContactPage && <Contact setDisplayContactPage={setDisplayContactPage} />}
        </div>
    );
}
