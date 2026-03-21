import React from 'react';
import './Education.css';
import { educationData } from '../../data/portfolioData';

const Education = () => {
    // We'll use a fallback library image since generation failed
    const libraryBg = "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop";

    return (
        <section id="education" className="education-v3">
            <div className="container">
                <div className="education-header">
                    <h2 className="section-title">Education</h2>
                </div>

                <div className="education-grid-v3">
                    {educationData.map((edu, index) => (
                        <div key={edu._id} className={`education-item-v3 ${index % 2 === 0 ? 'large' : 'small'}`}>
                            <div className="edu-bg-image" style={{ backgroundImage: `url(${libraryBg})` }}></div>
                            <div className="edu-content-glass">
                                <div className="edu-main-info">
                                    <h3 className="edu-degree">{edu.degree}</h3>
                                    <p className="edu-institution">{edu.institution}</p>
                                    <p className="edu-duration">{edu.duration}</p>
                                </div>
                                <div className="edu-footer-info">
                                    <div className="edu-badge">
                                        <i className="fas fa-graduation-cap"></i>
                                        <span>CGPA: {edu.score}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
