import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Hero.css'; // Ensure you have the CSS file for Hero component

const Hero = () => {
  const nameRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('zoom-in');
          } else {
            entry.target.classList.remove('zoom-in');
          }
        });
      },
      { threshold: 0.5 }
    );

    const nameElement = nameRef.current;
    const titleElement = titleRef.current;

    if (nameElement) {
      observer.observe(nameElement);
    }
    if (titleElement) {
      observer.observe(titleElement);
    }

    return () => {
      if (nameElement) {
        observer.unobserve(nameElement);
      }
      if (titleElement) {
        observer.unobserve(titleElement);
      }
    };
  }, []);

  return (
    <motion.section
      className="hero"
      style={{
        background: `linear-gradient(135deg, #1e3c72, #2a5298)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        color: '#fff',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Profile Picture */}
      <motion.img
        src={`${process.env.PUBLIC_URL}/placeholder-profile.jpg`}
        alt="Vaibhav Pandey"
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          marginBottom: '20px',
          objectFit: 'cover',
          border: '3px solid #fff',
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />

      {/* Name */}
      <motion.h1
        ref={nameRef}
        style={{
          fontSize: '3rem',
          margin: '0',
          fontFamily: 'Playfair Display, serif',
        }}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        Vaibhav Pandey
      </motion.h1>

      {/* Profession */}
      <motion.h2
        ref={titleRef}
        style={{
          fontSize: '2rem',
          margin: '10px 0',
        }}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        Web Developer & Designer
      </motion.h2>

      {/* Tagline */}
      <motion.p
        style={{
          fontSize: '1.2rem',
        }}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        Turning ideas into interactive experiences
      </motion.p>

      {/* Call-to-Action Button */}
      <motion.a
        href="#projects" // Link to the Projects section
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          borderRadius: '5px',
          background: '#fff',
          color: '#1e3c72',
          textDecoration: 'none',
          fontWeight: '600',
          fontSize: '1rem',
        }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0 }}
        whileHover={{ background: '#1e3c72', color: '#fff' }}
      >
        View My Work
      </motion.a>
    </motion.section>
  );
};

export default Hero;