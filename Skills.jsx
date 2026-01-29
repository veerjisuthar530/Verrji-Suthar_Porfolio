import React from 'react';
import { skills } from '../data/skills';

const Skills = () => {
    return (
        <section id="skills" className="bg-light">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="row">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <h4 className="mb-4 text-center text-primary">Frontend Development</h4>
                        <div className="row g-3">
                            {skills.frontend.map((skill, index) => (
                                <div key={index} className="col-6 col-md-6">
                                    <div className="p-3 bg-white rounded shadow-sm text-center card h-100 justify-content-center">
                                        <h6 className="mb-1 fw-bold">{skill.name}</h6>
                                        <small className="text-muted">{skill.level}</small>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h4 className="mb-4 text-center text-primary">Programming Fundamentals</h4>
                        <div className="row g-3">
                            {skills.fundamentals.map((skill, index) => (
                                <div key={index} className="col-6 col-md-6">
                                    <div className="p-3 bg-white rounded shadow-sm text-center card h-100 justify-content-center">
                                        <h6 className="mb-1 fw-bold">{skill.name}</h6>
                                        <small className="text-muted">{skill.level}</small>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
