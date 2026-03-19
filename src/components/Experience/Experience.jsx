import React from 'react';
import './Experience.css';

const Experience = ({ experience }) => {
    return (
        <section id="experience" className="experience-section">
            <div className="experience-overlay"></div>
            <div className="container experience-relative">
                <h2 className="section-title">Experience</h2>
                <div className="exp-timeline">
                    {experience && experience.length > 0 ? (
                        experience.map((exp, index) => (
                            <div key={exp._id || index} className="exp-timeline-item glass-card">
                                <div className="exp-timeline-dot"></div>
                                <div className="exp-timeline-date">{exp.duration}</div>
                                <h3>{exp.role}</h3>
                                <h4 className="accent">{exp.company}</h4>
                                <p>{exp.description}</p>
                                {exp.isInternship && <span className="exp-badge">Internship</span>}
                            </div>
                        ))
                    ) : (
                        <p className="no-data">No experience data found.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Experience;
