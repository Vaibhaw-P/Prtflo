import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css'; // Ensure you have the CSS file for Experience component

const Experience = () => {
  const experiences = [
    {
      role: 'Freelance Developer & Designer',
      company: 'Self-Employed',
      duration: '2022 - Present',
      description: 'Worked on various minor and major projects, delivering high-quality solutions tailored to client needs. Collaborated with teams to design and develop user-friendly web applications.'
    }
  ];

  return (
    <section className="experience">
      <h2>Work Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-item"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3>{exp.role}</h3>
            <p><strong>{exp.company}</strong> | {exp.duration}</p>
            <p>{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;