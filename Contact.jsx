"use client";

import React, { useState } from "react";
import { FaPaperPlane, FaUser, FaEnvelope, FaComment } from "react-icons/fa";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    
    const formData = new FormData(event.target);
    // Replace this with your actual Web3Forms Access Key
    formData.append("access_key", "4d736c41-3058-4115-bca5-73cc15c88483");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Success");
        event.target.reset();
      } else {
        console.error("Error", data);
        setResult("Error");
      }
    } catch (error) {
      console.error("Submit Error", error);
      setResult("Error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-5">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-secondary">
            Have a project in mind or just want to say hello? Let’s talk.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-body p-5">
                
                {result !== "Success" ? (
                  <form onSubmit={onSubmit}>
                    {/* Name */}
                    <div className="mb-4">
                      <label className="form-label fw-semibold">
                        <FaUser className="me-2 text-primary" />
                        Name
                      </label>
                      <input
                        type="text"
                        name="name" // Essential for Web3Forms
                        className="form-control form-control-lg"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                      <label className="form-label fw-semibold">
                        <FaEnvelope className="me-2 text-primary" />
                        Email
                      </label>
                      <input
                        type="email"
                        name="email" // Essential for Web3Forms
                        className="form-control form-control-lg"
                        placeholder="name@example.com"
                        required
                      />
                    </div>

                    {/* Message */}
                    <div className="mb-4">
                      <label className="form-label fw-semibold">
                        <FaComment className="me-2 text-primary" />
                        Message
                      </label>
                      <textarea
                        name="message" // Essential for Web3Forms
                        className="form-control form-control-lg"
                        rows="4"
                        placeholder="Tell me about your project..."
                        required
                      ></textarea>
                    </div>

                    {/* Submit */}
                    <div className="d-grid">
                      <button 
                        type="submit" 
                        className="btn btn-primary btn-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            <FaPaperPlane className="me-2" />
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                    
                    {result === "Error" && (
                      <p className="text-danger mt-3 text-center">
                        Something went wrong. Please try again.
                      </p>
                    )}
                  </form>
                ) : (
                  <div className="text-center py-4">
                    <h4 className="text-success mb-3">
                      Message Sent Successfully! 🎉
                    </h4>
                    <p className="text-secondary">
                      Thank you for reaching out. I’ll get back to you soon.
                    </p>
                    <button 
                      className="btn btn-outline-primary btn-sm mt-3" 
                      onClick={() => setResult("")}
                    >
                      Send another message
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;