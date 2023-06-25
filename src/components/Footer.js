// Imports
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

// Component
function Footer() {
  return (
    <footer className="d-flex justify-content-center">
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/stephen-bondurant-018b73150/">
          <FaLinkedin size={32} />
        </a>
        <a href="https://github.com/Steveb175">
          <FaGithub size={32} />
        </a>
      </div>
    </footer>
  );
}

// Exported Component
export default Footer;
