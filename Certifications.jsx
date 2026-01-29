import React from 'react';
import { certifications } from '../data/certifications';

const Certifications = () => {
    return (
        <section id="certifications" className="bg-white">
            <div className="container">
                <h2 className="section-title">Certifications</h2>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <ul className="list-group list-group-flush">
                            {certifications.map((cert) => (
                                <li key={cert.id} className="list-group-item d-flex justify-content-between align-items-center border-bottom py-3">
                                    <div>
                                        <h5 className="mb-1">{cert.title}</h5>
                                        <small className="text-muted">{cert.issuer}</small>
                                    </div>
                                    <span className="badge bg-primary rounded-pill">{cert.year}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
