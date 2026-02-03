import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);

        try {
            const response = await fetch("https://formsubmit.co/ajax/patelmann673@gmail.com", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success === "true") {
                setShowSuccess(true);
                e.target.reset();
                setTimeout(() => setShowSuccess(false), 5000);
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error sending email:", error);
            alert("Error sending email. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="contact-section section">
            {showSuccess && (
                <motion.div
                    className="success-modal"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="success-icon">✓</div>
                    <div className="success-text">Message Sent Successfully!</div>
                </motion.div>
            )}
            <div className="container">
                <motion.div
                    className="section-header center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="sub-heading">Get In Touch</span>
                    <h2 className="section-title">Contact Me</h2>
                </motion.div>

                <div className="contact-container">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3>Let's create something specific.</h3>
                        <p>
                            I'm open for internships and junior developer roles. If you have a project in mind
                            or just want to say hello, don't hesitate to reach out!
                        </p>

                        <div className="contact-links">
                            <a href="mailto:patelmann673@gmail.com" className="contact-link-item">
                                <div className="icon-box"><FaEnvelope /></div>
                                <span>patelmann673@gmail.com</span>
                            </a>
                            <a href="https://www.linkedin.com/in/mann-patel-839b33399" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                                <div className="icon-box"><FaLinkedin /></div>
                                <span>LinkedIn</span>
                            </a>
                            <a href="https://github.com/mann2007-ptl" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                                <div className="icon-box"><FaGithub /></div>
                                <span>GitHub</span>
                            </a>
                            <a href="https://www.youtube.com/@patelmann7197" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                                <div className="icon-box"><FaYoutube /></div>
                                <span>YouTube</span>
                            </a>
                        </div>
                    </motion.div>

                    <motion.form
                        className="contact-form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <input type="hidden" name="_captcha" value="false" />

                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="John Doe" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="john@example.com" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="5" placeholder="Drop your message here..." required></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Send Message'} <FaPaperPlane className="btn-icon-small" />
                        </button>
                    </motion.form>
                </div>

                <div className="footer-copyright">
                    <p>&copy; {new Date().getFullYear()} Mann Patel. Made with React & Framer Motion.</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
