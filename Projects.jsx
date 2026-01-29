import React from "react";
import { projects } from "../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="bg-light py-5">
      <div className="container">

        <h2 className="section-title text-center mb-5">
          Featured Projects
        </h2>

        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0 project-card">
                
                <div className="card-body d-flex flex-column">
                  
                  {/* Title */}
                  <h5 className="card-title fw-bold text-dark mb-2">
                    {project.title}
                  </h5>

                  {/* Tech Stack */}
                  <div className="mb-3">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="badge bg-light text-dark border me-1 mb-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="card-text text-secondary mb-4 flex-grow-1">
                    {project.description}
                  </p>

                  {/* Buttons */}
                  <div className="d-flex gap-2 mt-auto">
                    
                    {/* GitHub */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary w-50"
                    >
                      <FaGithub className="me-2" />
                      Code
                    </a>

                    {/* Live Demo */}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary w-50"
                      >
                        <FaExternalLinkAlt className="me-2" />
                        Live
                      </a>
                    )}

                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
