import React from "react";
import "./Skills.css";

const skills = [
  { title: "HTML", level: "Expert", percent: 95 },
  { title: "CSS", level: "Expert", percent: 88 },
  { title: "JavaScript", level: "Expert", percent: 95 },
  { title: "React", level: "Expert", percent: 90 },
  { title: "Node.js", level: "Expert", percent: 85 },
  { title: "Express", level: "intermediate", percent: 75 },
  { title: "MongoDB", level: "Intermediate", percent: 80 },
  { title: "Tailwind", level: "Expert", percent: 92 },
  { title: "REST APIs", level: "Expert", percent: 89 },
  { title: "VScode", level: "Expert", percent: 90 },
  { title: "BootStrap", level: "Expert", percent: 90 },
  { title: "Git", level: "Advanced", percent: 90 },
];

const Skills = () => (
  <div className="skills-section" id="skill">
    <h2 className="skills-main-title">Technical Skills</h2>
    <div className="skills-grid">
      {skills.map((skill, idx) => (
        <div className="skill-card" key={idx}>
          <div className="skill-title">{skill.title}</div>
          <div className="skill-level">{skill.level}</div>
          <div className="skill-bar-container">
            <div
              className="skill-bar"
              style={{
                width: `${skill.percent}%`,
                background: "linear-gradient(90deg, #736bbd, #0aae4e)",
              }}
            ></div>
            <span className="skill-percent">{skill.percent}%</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
