import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A brief description of the project.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Vaibhaw-P',
      demo: 'https://example.com',
    },
    {
      title: 'Project 2',
      description: 'A brief description of the project.',
      technologies: ['React', 'Figma'],
      github: 'https://github.com/Vaibhaw-P',
      demo: 'https://example.com',
    },
  ];

  return (
    <ScrollAnimation>
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo-link"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default Projects;