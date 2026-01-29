import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4 fw-bold text-primary">Veerji Suthar</h5>
                        <p className="text-muted small">
                            Passionate Front-End Developer tailored to building exceptional digital experiences.
                        </p>
                    </div>
                    <div className="col-md-4 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4 fw-bold">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#about" className="text-decoration-none text-light opacity-75 hover-opacity-100">About</a></li>
                            <li><a href="#skills" className="text-decoration-none text-light opacity-75 hover-opacity-100">Skills</a></li>
                            <li><a href="#projects" className="text-decoration-none text-light opacity-75 hover-opacity-100">Projects</a></li>
                            <li><a href="#contact" className="text-decoration-none text-light opacity-75 hover-opacity-100">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5 className="text-uppercase mb-4 fw-bold">Contact</h5>
                        <div className="d-flex align-items-center mb-2">
                            <FaEnvelope className="me-2 text-primary" />
                            <span className="text-light opacity-75">veerjisuthar430@gmail.com</span>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <FaPhone className="me-2 text-primary" />
                            <span className="text-light opacity-75">+92 340 3542395</span>
                        </div>
                        <div className="d-flex gap-3 mt-3">
                            <a href="https://github.com/veerjisuthar530" target="_blank" rel="noopener noreferrer" className="text-light fs-4"><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/veerji-suthar-0b943032a" target="_blank" rel="noopener noreferrer" className="text-primary fs-4"><FaLinkedin /></a>
                        </div>
                    </div>
                </div>
                <hr className="my-4 border-secondary" />
                <div className="text-center text-muted small">
                    &copy; {new Date().getFullYear()} Veerji Suthar. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
