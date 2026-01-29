import React from 'react';
import { experience } from '../data/experience';

const Experience = () => {
    return (
        <section id="experience" className="bg-white">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        {experience.map((exp) => (
                            <div key={exp.id} className="card mb-4 border-0 shadow-sm position-relative">
                                <div className="card-body p-4">
                                    <div className="d-md-flex justify-content-between align-items-center mb-3">
                                        <h3 className="h4 card-title fw-bold text-primary mb-1">{exp.role}</h3>
                                        <span className="badge bg-secondary rounded-pill py-2 px-3">{exp.duration}</span>
                                    </div>
                                    <h5 className="text-muted mb-3">{exp.company}</h5>
                                    <ul className="list-group list-group-flush">
                                        {exp.description.map((item, index) => (
                                            <li key={index} className="list-group-item border-0 px-0 py-1">
                                                <i className="bi bi-check2-circle text-primary me-2"></i>• {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
