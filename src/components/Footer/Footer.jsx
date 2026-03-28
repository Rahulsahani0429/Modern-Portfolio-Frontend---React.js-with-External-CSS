import React from 'react';
import { FaReact, FaNodeJs, FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiVercel, SiExpress } from 'react-icons/si';
import './Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer-v2">
            {/* Glowing top divider */}
            <div className="footer-glow-line"></div>

            <div className="footer-content-wrapper">
                <div className="footer-grid">
                    {/* Left Section */}
                    <div className="footer-left">
                        <div className="footer-logo">
                            <h2 className="rk-gradient">RK</h2>
                        </div>
                        <h4 className="footer-role">REACT & FULL STACK DEVELOPER</h4>
                        <h3 className="footer-name">RAHUL KUMAR SAHANI</h3>
                        <p className="footer-contact-info">
                            Jaipur, Rajasthan, India<br />
                            <a href="mailto:rahulcse3212@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }} className="footer-email-link">rahulcse3212@gmail.com</a>
                        </p>
                        <a href="/projects/Rahul_sahani_cv.pdf" target="_blank" rel="noopener noreferrer" className="footer-resume-link" download>
                            DOWNLOAD MY RESUME / CV
                        </a>
                    </div>

                    {/* Center Section */}
                    <div className="footer-center">
                        <nav className="footer-nav">
                            <a href="#home">Home</a><span className="dot">•</span>
                            <a href="#about">About</a><span className="dot">•</span>
                            <a href="#projects">Projects</a><span className="dot">•</span>
                            <a href="#skills">Skills</a><span className="dot">•</span>
                            <a href="#contact">Contact</a>
                        </nav>

                        <div className="footer-skills-section">
                            <h4 className="skills-heading">Top Skills</h4>
                            <div className="skills-pills">
                                <span className="skill-pill"><FaReact className="skill-icon" /> React</span>
                                <span className="skill-pill"><FaNodeJs className="skill-icon" /> Node.js</span>
                                <span className="skill-pill"><SiExpress className="skill-icon" /> Express.js</span>
                                <span className="skill-pill"><SiMongodb className="skill-icon" /> MongoDB</span>
                                <span className="skill-pill"><SiTailwindcss className="skill-icon" /> Tailwind CSS</span>
                                <span className="skill-pill"><SiVercel className="skill-icon" /> Vercel</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="footer-right">
                        <h3 className="footer-cta-heading">Let's build something amazing together 🚀</h3>
                        <p className="footer-cta-subtext">Available for freelance & full-time opportunities.</p>

                        <div className="footer-cta-buttons">
                            <a href="https://www.linkedin.com/in/rahul-kumar-sahani-4729b8274/" target="_blank" rel="noopener noreferrer" className="btn-purple-outline">MESSAGE ME ON LINKEDIN</a>
                            <a href="https://github.com/Rahulsahani0429" target="_blank" rel="noopener noreferrer" className="btn-purple-solid">VIEW MY GITHUB</a>
                        </div>

                        <div className="footer-socials">
                            <a href="https://github.com/Rahulsahani0429" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/rahul-kumar-sahani-4729b8274/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                            <a href="mailto:rahulcse3212@gmail.com"><FaEnvelope /></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom divider */}
            <div className="footer-glow-line-subtle"></div>

            <div className="footer-bottom-wrapper">
                <div className="footer-bottom-bar">
                    <p className="copyright-text">&copy; 2026 Rahul Kumar Sahani. All rights reserved. <span className="w3c-badge">W3C VALIDATED</span></p>

                    <p className="footer-credits">
                        Crafted with MERN Stack by Rahul Kumar Sahani ❤️
                    </p>
                    <button className="back-to-top-container" onClick={scrollToTop} aria-label="Back to top">
                        <span className="back-to-top-text">Back to top</span>
                        <span className="back-to-top-icon"><FaArrowUp /></span>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
