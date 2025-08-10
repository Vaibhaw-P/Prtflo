import React, { useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    const contactSection = document.querySelector('.contact');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          contactSection.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    observer.observe(contactSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <div className="contact-info">
        <p><strong>Email:</strong> <a href="mailto:strategicpandey@gmail.com">strategicpandey@gmail.com</a></p>
        <p><strong>Phone:</strong> +91 8318083366</p>
        <p><strong>GitHub:</strong> <a href="https://github.com/Vaibhaw-P" target="_blank" rel="noopener noreferrer">Vaibhaw-P</a></p>
      </div>
    </section>
  );
};

export default Contact;