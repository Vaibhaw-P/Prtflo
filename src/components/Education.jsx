import React from 'react';
import { motion } from 'framer-motion';
import './Education.css'; // Ensure you have the CSS file for Education component

const Education = () => {
  const education = [
    {
      degree: 'Under Graduation (B.Tech)',
      institution: 'Galgotias University, Greater Noida, UP',
      year: '2021 - Present'
    },
    {
      degree: '12th (Senior Secondary)',
      institution: 'St. Anthony\'s Inter College, Pratapgarh, UP',
      year: '2020 - 2021'
    },
    {
      degree: '10th (Secondary)',
      institution: 'Sangam International School, Pratapgarh, UP',
      year: '2018 - 2019'
    }
  ];

  return (
    <section className="education">
      <h2>Education</h2>
      <div className="education-list">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="education-item"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3>{edu.degree}</h3>
            <p><strong>{edu.institution}</strong> | {edu.year}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;