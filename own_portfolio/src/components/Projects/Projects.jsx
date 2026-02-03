import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Ultimate Ears',
            category: 'Audio Brand Site',
            description: 'A high-energy, visually immersive landing page for Ultimate Ears, featuring dynamic scroll interactions and punchy typography.',
            image: 'https://placehold.co/600x400/101010/00d4ff?text=Ultimate+Ears',
            tags: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
            links: {
                demo: 'https://mannpatel-ultimate-ears-clone.netlify.app/',
                code: 'https://github.com/mann2007-ptl/ultimate-ears-diwali-assgn'
            }
        },
        {
            title: 'Salomon',
            category: 'E-Commerce / Outdoor',
            description: 'A premium outdoor gear store clone featuring rugged aesthetics, smooth navigation, and responsive product grids.',
            image: 'https://placehold.co/600x400/2c3e50/ffffff?text=Salomon',
            tags: ['HTML', 'CSS', 'JavaScript'],
            links: {
                demo: 'https://mannpatel-salomon-clone.netlify.app/',
                code: 'https://github.com/mann2007-ptl/salomon-diwali-asgn/tree/main/salomon'
            }
        },
        {
            title: 'Lacoste Clone',
            category: 'E-commerce',
            description: 'A responsive clone of the Lacoste website featuring modern layout techniques, mega-menus, and product filtering.',
            image: 'https://placehold.co/600x400/2c5530/ffffff?text=Lacoste',
            tags: ['HTML', 'CSS', 'JavaScript'],
            links: {
                demo: 'https://mannpatel108585-lacoste-clone.netlify.app/diwali_assgn1/lacoste/',
                code: 'https://github.com/mann2007-ptl/diwali_assgn1/tree/main/lacoste'
            }
        },
        {
            title: 'Stanley Product Page',
            category: 'Landing Page',
            description: 'Modern product landing page clone with strong visuals, typography focus, and completely responsive sections.',
            image: 'https://placehold.co/600x400/d97706/ffffff?text=Stanley',
            tags: ['HTML', 'CSS', 'Responsive'],
            links: {
                demo: 'https://mannpatel-stanley.netlify.app/stanley-diwal-assgn-/stanley/',
                code: 'https://github.com/mann2007-ptl/stanley-diwal-assgn-/tree/main/stanley'
            }
        },
        {
            title: 'Jio-Hotstar Clone',
            category: 'Streaming UI',
            description: 'UI clone inspired by streaming platforms to practice card layouts, spacing, and content hierarchy.',
            image: 'https://placehold.co/600x400/0f172a/00d4ff?text=Jio+Hotstar',
            tags: ['HTML', 'CSS', 'JavaScript'],
            links: {
                demo: 'https://mannpatel108585-jiohotstar-clone.netlify.app/diwali_assgn/jio-hotstar/',
                code: 'https://github.com/mann2007-ptl/diwali_assgn/tree/main/jio-hotstar'
            }
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="projects" className="projects-section section">
            <div className="container">
                <motion.div
                    className="section-header center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="sub-heading">My Portfolio</span>
                    <h2 className="section-title">Featured Projects</h2>
                </motion.div>

                <motion.div
                    className="projects-grid"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {projects.map((project, index) => (
                        <motion.div key={index} className="project-card" variants={item}>
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href={project.links.demo} className="btn-icon" aria-label="Demo"><FaExternalLinkAlt /></a>
                                        <a href={project.links.code} className="btn-icon" aria-label="Code"><FaGithub /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="project-info">
                                <span className="project-category">{project.category}</span>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
