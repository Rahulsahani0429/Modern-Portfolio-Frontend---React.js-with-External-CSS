import React from 'react';
import './Projects.css';
import { projectsData } from '../../data/portfolioData';

const Projects = () => {
    // Use static data
    const displayProjects = projectsData;


    return (
        <section id="projects" className="projects-section-v3">
            <div className="container">
                <div className="projects-header-v3">
                    <h2 className="section-title-v3">PROJECTS</h2>
                    <div className="title-underline"></div>
                    <p className="section-subtitle-v3">
                        A showcase of the projects I have worked on, highlighting my skills and experience in various technologies
                    </p>
                </div>

                <div className="projects-grid-v3">
                    {displayProjects.map((project) => (
                        <div key={project._id} className="project-card-v3 glass-card">
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-image-v3" />
                            </div>
                            <div className="project-info-v3">
                                <h3 className="project-title-v3">{project.title}</h3>
                                <p className="project-desc-v3">{project.description}</p>
                                {project.showStatus && (
                                    <div className="project-status-box">
                                        <span className={`status-badge ${project.projectStatus.toLowerCase().replace(/\s+/g, "-")}`}>
                                            {project.projectStatus}
                                        </span>
                                        {project.statusText && (
                                            <p className="status-text">{project.statusText}</p>
                                        )}
                                        {typeof project.progress === "number" && (
                                            <div className="progress-container">
                                                <div className="progress-bar">
                                                    <div
                                                        className="progress-fill"
                                                        style={{ width: `${project.progress}%` }}
                                                    ></div>
                                                </div>
                                                <span className="progress-text">{project.progress}% Completed</span>
                                            </div>
                                        )}
                                    </div>
                                )}
                                <div className="project-tags-v3">
                                    {(project.techStack || []).map((tech, index) => (
                                        <span key={index} className="tech-tag-v3">{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    {project.githubLink && (
                                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn-project-link">
                                            <i className="fab fa-github"></i> GitHub
                                        </a>
                                    )}
                                    {(!project.liveLink && (project.projectStatus === "Coming Soon" || project.projectStatus === "Under Development" || project.projectStatus === "Currently Working" || project.projectStatus === "In Progress")) ? (
                                        <button disabled className="btn-project-link primary disabled-link">
                                            <i className="fas fa-clock"></i> Coming Soon
                                        </button>
                                    ) : project.liveLink ? (
                                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn-project-link primary">
                                            <i className="fas fa-external-link-alt"></i> Live Demo
                                        </a>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="projects-footer-v3">
                    <button className="btn-showcase-v3">
                        Project Showcase <span className="arrow"> &gt;</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
