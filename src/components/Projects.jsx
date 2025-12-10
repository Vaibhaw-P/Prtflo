import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'chatssssss.netlify.app is a lightweight, fast, and responsive web-based chat interface designed using modern web technologies to provide a smooth, minimal, and user-friendly messaging experience',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Netlify', 'Vercel',],
      github: 'https://github.com/Vaibhaw-P/Chat_App-Frontend',
      demo: 'https://Chatssssss.netlify.app',
    },
    {
      title: 'Project 2',
      description: 'pokedexii.netlify.app is a simple and responsive Pokédex web app that fetches real-time Pokémon data using JavaScript and displays it through a clean, interactive HTML/CSS interface.',
      technologies: ['HTML', 'CSS', 'JavaScript',],
      github: 'https://github.com/Vaibhaw-P/Pokedex',
      demo: 'https://Pokedexii.netlify.app',
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