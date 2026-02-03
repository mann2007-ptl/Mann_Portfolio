import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
    const educationData = [
        {
            institution: 'Swaminarayan University',
            degree: 'Computer Engineering',
            year: 'Present',
            description: 'Pursuing Bachelor of Engineering in Computer Engineering. Focusing on core CS concepts and web technologies.'
        },
        {
            institution: 'Higher Secondary (Class 12)',
            degree: 'Science Stream',
            year: '2025',
            description: 'Completed with 74.80% score. Major subjects included Physics, Mathematics, and Computer Science.'
        },
        {
            institution: 'Secondary School (Class 10)',
            degree: 'General',
            year: '2023',
            description: 'Completed with 75% score. Built a strong foundation in mathematics and logic.'
        }
    ];

    return (
        <section id="education" className="education-section section">
            <div className="container">
                <motion.div
                    className="section-header center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="sub-heading">My Journey</span>
                    <h2 className="section-title">Education</h2>
                </motion.div>

                <div className="timeline">
                    {educationData.map((item, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-date">{item.year}</div>
                                <h3 className="timeline-title">{item.institution}</h3>
                                <h4 className="timeline-degree">{item.degree}</h4>
                                <p className="timeline-description">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
