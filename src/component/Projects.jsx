import React from "react";
import "./Projects.css";

const projects = [
  {
    image: "/LIBRARY.jpg",
    title: "StudyHub",
    description: "A modern MERN stack application for managing tasks efficiently.",
    features: ["Authentication", "Real-time Updates", "Responsive UI"],
    links: {
      demo: "#",
      code: "#",
      learn: "#"
    }
  },
  {
    image: "/CODING.jpg",
    title: "Rank-Rush",
    description: "Collaborative platform for developers to share code and ideas.",
    features: ["Collaboration", "Code Editor", "Community"],
    links: {
      demo: "#",
      code: "#",
      learn: "#"
    }
  },
  {
    image: "/SPOTIFY.jpg",
    title: "TuneWave - Spotify Clone",
    description: "A Music Platform with the help of Spotify API.",
    features: ["Modern UI", "Responsive Design", "Player Bar", "Playlists Section"],
    links: {
      demo: "#",
      code: "#",
      learn: "#"
    }
  }
];

const Projects = () => (
  <div className="projects-section">
    <h2 className="projects-title">Featured <span>Projects</span></h2>
    <div className="projects-grid">
      {projects.map((project, idx) => (
        <div className="project-card" key={idx}>
          <img src={project.image} alt={project.title} className="project-img" />
          <button className="mern-btn">MERN</button>
          <h3 className="project-card-title">{project.title}</h3>
          <p className="project-desc">{project.description}</p>
          <div className="features-list">
            {project.features.map((feature, fidx) => (
              <button className="feature-btn" key={fidx}>{feature}</button>
            ))}
          </div>
          <div className="project-actions">
            <a href={project.links.demo} className="action-btn" target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href={project.links.code} className="action-btn" target="_blank" rel="noopener noreferrer">Code</a>
            <a href={project.links.learn} className="action-btn" target="_blank" rel="noopener noreferrer">Learn More</a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
