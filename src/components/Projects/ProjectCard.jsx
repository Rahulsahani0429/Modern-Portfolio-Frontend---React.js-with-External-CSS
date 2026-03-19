import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card glass-card">
            <div className="project-img-container">
                <img src={project.image || `/src/assets/projects/${project.title.toLowerCase().replace(/\s/g, '-')}.png`} alt={project.title} />
            </div>
            <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                    {project.technologies.map(tech => (
                        <span key={tech}>{tech}</span>
                    ))}
                </div>
                <div className="project-links">
                    <a href={project.githubLink} className="icon-link"><i className="fab fa-github"></i> GitHub</a>
                    <a href={project.liveDemo} className="icon-link"><i className="fas fa-external-link-alt"></i> Demo</a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
