import React from "react";
import "./Hero.css";

const techs = [
  "React", "Node.js", "MongoDB", "Express", "JavaScript",
  "HTML5", "CSS3", "Git", "Redux", "VS Code"
];

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hi, We are Bot Brakers</h1>
        <h1 className="hero-subtitle">MERN Stack Developer</h1>
        <h3 className="hero-desc">Building modern web applications</h3>
        <>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</>
        <div className="hero-buttons">
          <button className="hero-btn">View Projects</button>
          <button className="hero-btn">Contact Me</button>
        </div>
        <div className="hero-techs">
          {techs.map((tech, idx) => (
            <span className="tech-btn" key={idx}>{tech}</span>
          ))}
        </div>
        <div className="scroll-down">
          <span className="scroll-icon">&#8595;</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;