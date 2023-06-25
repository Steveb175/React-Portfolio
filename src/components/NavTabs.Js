// Imports
import React from "react";
import "../styles/styles.css";

// Component
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#projects"
          onClick={() => handlePageChange("Projects")}
          className={
            currentPage === "Projects" ? "nav-link active" : "nav-link"
          }
        >
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}
// Exported Component
export default NavTabs;
