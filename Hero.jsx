"use client";

import React, { useState } from "react";
import { FaArrowDown, FaMoon, FaSun } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import "./hero.css";

const Hero = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <section className={`hero-section ${darkMode ? "dark" : ""}`}>
      
      {/* Dark Mode Toggle */}
      <button
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle theme"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

      {/* Background Blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-8">

            <h1 className="hero-title">
              Hi, I'm <span>Veerji Suthar</span>
            </h1>

            <h2 className="hero-subtitle">
              <ReactTyped
                strings={[
                  "Full-Stack Web Developer",
                  "React & Next.js Specialist",
                  "Software Engineer",
                ]}
                typeSpeed={60}
                backSpeed={40}
                loop
              />
            </h2>

            <p className="hero-description">
              Building fast, scalable, and conversion-focused web applications
              with modern technologies and clean user experience.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn primary">
                View Projects
              </a>
              {/* Updated CV Download Link */}
<a 
  href="/Veerji Suthar CV.pdf" 
  download 
  className="btn secondary"
>
  Download CV
</a>
            </div>
            
          
          </div>
        </div>

        <div className="scroll-down">
          <FaArrowDown />
        </div>
      </div>
    </section>
  );
};

export default Hero;
