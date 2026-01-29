"use client";

import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./navbar.css";

const Navigation = () => {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="navbar-custom"
    >
      <Container>
        {/* Brand */}
        <Navbar.Brand href="#home" className="fw-bold brand-text">
          VEERJI SUTHAR
        </Navbar.Brand>

        {/* Toggle */}
        <Navbar.Toggle aria-controls="main-navbar" />

        {/* Links */}
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-center gap-lg-3">
            {["about", "skills", "experience", "projects", "certifications", "contact"].map(
              (item) => (
                <Nav.Link
                  key={item}
                  href={`#${item}`}
                  className="nav-link-custom"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Nav.Link>
              )
            )}

            {/* Social Icons */}
            <div className="d-none d-lg-flex align-items-center ms-3 gap-3">
              <a
                href="https://github.com/veerjisuthar530"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon github"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/veerji-suthar-0b943032a"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon linkedin"
              >
                <FaLinkedin />
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
