import React from 'react';
import { education } from '../data/education';

const Education = () => {
    return (
        <section id="education" className="bg-light">
            <div className="container">
                <h2 className="section-title">Education</h2>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        {education.map((edu) => (
                            <div key={edu.id} className="card border-0 shadow-sm mb-3">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <h5 className="card-title fw-bold mb-0 text-primary">{edu.degree}</h5>
                                        <small className="text-muted">{edu.duration}</small>
                                    </div>
                                    <h6 className="card-subtitle mb-2 text-dark">{edu.institution}</h6>
                                    <p className="card-text text-secondary mb-0 fw-bold">{edu.grade}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
