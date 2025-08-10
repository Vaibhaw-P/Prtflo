import React, { useContext } from 'react';
import { FaReact, FaHtml5, FaCss3, FaJs, FaGit, FaGithub, FaFigma } from 'react-icons/fa';
import { ThemeContext } from './ThemeContext';

const Skills = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const skills = [
    { name: 'HTML', icon: <FaHtml5 />, level: 90 },
    { name: 'CSS', icon: <FaCss3 />, level: 85 },
    { name: 'JavaScript', icon: <FaJs />, level: 80 },
    { name: 'React', icon: <FaReact />, level: 75 },
    { name: 'Git', icon: <FaGit />, level: 70 },
    { name: 'GitHub', icon: <FaGithub />, level: 70 },
    { name: 'Figma', icon: <FaFigma />, level: 65 },
  ];

  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-icon">
              {React.cloneElement(skill.icon, {
                color: isDarkMode ? '#ffffff' : '#1a1a1a', // Dynamic icon color
              })}
              <span style={{ color: isDarkMode ? '#ffffff' : '#1a1a1a' }}> {/* Dynamic text color */}
                {skill.name}
              </span>
            </div>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;