import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white py-5">
      <div className="container">

        <h2 className="section-title text-center mb-4">About Me</h2>

        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">

            <p className="lead text-secondary mb-3">
              I’m a <strong>passionate Full-Stack Developer</strong> with strong
              expertise in modern frontend and backend technologies, including
              <strong> HTML, CSS, JavaScript, React.js, and Next.js</strong>.
            </p>

            <p className="lead text-secondary mb-3">
              I specialize in building <strong>responsive, scalable, and
              SEO-optimized web applications</strong> that focus on performance,
              usability, and real-world business impact.
            </p>

            <p className="lead text-secondary">
              I’ve gained hands-on industry experience through a
              <strong> 2-month React.js internship</strong> and I’m currently
              pursuing a <strong>Bachelor’s degree in Software Engineering</strong>
              at <strong>SMI University</strong>, driven by curiosity, clean code,
              and continuous learning.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
