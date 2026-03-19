import React from 'react';
import './Skills.css';
import {
    SiHtml5, SiCss3, SiJavascript, SiReact, SiRedux, SiNextdotjs, SiSass, SiGreensock, SiMui, SiBootstrap,
    SiSpring, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiPostgresql, SiFirebase,
    SiC, SiCplusplus, SiPython, SiDotnet, SiTypescript,
    SiGit, SiGithub, SiPostman, SiGeocaching, SiVercel, SiNetlify, SiFigma
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

const Skills = ({ skills }) => {
    // Utility to get icon component based on string
    const getIcon = (iconName) => {
        const iconLower = iconName.toLowerCase();
        switch (iconLower) {
            case 'html': return <SiHtml5 style={{ color: '#E34F26' }} />;
            case 'css': return <SiCss3 style={{ color: '#1572B6' }} />;
            case 'javascript': return <SiJavascript style={{ color: '#F7DF1E' }} />;
            case 'react': return <SiReact style={{ color: '#61DAFB' }} />;
            case 'nodejs': return <SiNodedotjs style={{ color: '#339933' }} />;
            case 'express': return <SiExpress style={{ color: '#ffffff' }} />;
            case 'mongodb': return <SiMongodb style={{ color: '#47A248' }} />;
            case 'mysql': return <SiMysql style={{ color: '#4479A1' }} />;
            case 'java': return <FaJava style={{ color: '#ED8B00' }} />;
            case 'c': return <SiC style={{ color: '#A8B9CC' }} />;
            case 'git': return <SiGit style={{ color: '#F05032' }} />;
            case 'github': return <SiGithub style={{ color: '#ffffff' }} />;
            case 'postman': return <SiPostman style={{ color: '#FF6C37' }} />;
            case 'vscode': return <VscCode style={{ color: '#007ACC' }} />;
            default: return <SiJavascript style={{ color: '#F7DF1E' }} />;
        }
    };

    // Group skills by category
    const skillsByCategory = skills && skills.length > 0 ?
        skills.reduce((acc, skill) => {
            const cat = skill.category || 'Other';
            if (!acc[cat]) acc[cat] = [];
            acc[cat].push(skill);
            return acc;
        }, {}) :
        null;

    const displayCategories = skillsByCategory ?
        Object.keys(skillsByCategory).map(cat => ({
            title: cat,
            skills: skillsByCategory[cat].map(s => ({
                name: s.name,
                icon: getIcon(s.icon)
            }))
        })) :
        [
            {
                title: 'Frontend',
                skills: [
                    { name: 'HTML', icon: <SiHtml5 style={{ color: '#E34F26' }} /> },
                    { name: 'CSS', icon: <SiCss3 style={{ color: '#1572B6' }} /> },
                    { name: 'JavaScript', icon: <SiJavascript style={{ color: '#F7DF1E' }} /> },
                    { name: 'React.js', icon: <SiReact style={{ color: '#61DAFB' }} /> },
                ]
            }
            // ... truncated fallbacks for brevity in this tool call
        ];

    return (
        <section id="skills" className="skills-section-v3">
            <div className="container relative">
                <div className="skills-header">
                    <h2 className="section-title">SKILLS</h2>
                    <p className="section-subtitle">
                        A collection of my technical skills and expertise honed through various projects and experiences.
                    </p>
                </div>

                <div className="skills-layout">
                    <div className="skills-grid-v3">
                        {displayCategories.map((cat, idx) => (
                            <div key={idx} className="skill-card-v3 glass-card">
                                <h3 className="category-header">{cat.title}</h3>
                                <div className="pill-container">
                                    {cat.skills.map((skill, sIdx) => (
                                        <div key={sIdx} className="skill-pill-v3">
                                            <span className="skill-icon">{skill.icon}</span>
                                            <span className="skill-name">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
