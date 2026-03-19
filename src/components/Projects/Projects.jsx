import React from 'react';
import './Projects.css';
import projectScreenshot from '../../assets/projects/Screenshot 2025-04-26 231129.png';

const Projects = ({ projects }) => {
    // Fallback data mapping to the reference image if prop is empty
    const displayProjects = (projects && projects.length > 0) ? projects : [
        {
            _id: '1',
            title: 'GitHub Profile Detective',
            description: 'A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profiles.',
            techStack: ['HTML', 'CSS', 'JavaScript', 'React JS', 'API'],
            image: projectScreenshot
        },
        {
            _id: '2',
            title: 'CS Prep',
            description: 'A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions.',
            techStack: ['React JS', 'Node.js', 'MongoDB', 'Express', 'HTML', 'CSS', 'JavaScript'],
            image: projectScreenshot
        },
        {
            _id: '3',
            title: 'Movie Recommendation App',
            description: 'A React-based web application that provides movie recommendations based on different criteria, such as genre.',
            techStack: ['React JS', 'API', 'HTML', 'CSS', 'JavaScript'],
            image: projectScreenshot
        }
    ];

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
                                <div className="project-tags-v3">
                                    {(project.techStack || []).map((tech, index) => (
                                        <span key={index} className="tech-tag-v3">{tech}</span>
                                    ))}
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
