import React from "react";
import "../../styles/styles.css";

export default function Projects() {
  return (
    <div
      className="page-div pb-5 mt-5"
      style={{ marginLeft: "3rem", marginRight: "3rem" }}
    >
      <h1>Projects</h1>
      <div className="container d-flex justify-content-center">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="project-card-container">
              <div className="card project-card">
                <p className="project-title">Brewery Finder</p>
                <a
                  href="https://github.com/Steveb175/Brewery-Finder"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/brewery-finder.PNG"
                    alt="Brewery Finder"
                    className="card-img-top project-img"
                    height="300"
                    style={{ maxWidth: "500px" }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="project-card-container">
              <div className="card project-card">
                <p className="project-title">Weather Dashboard</p>
                <a
                  href="https://github.com/Steveb175/Weather-Dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/weather-dashboard.PNG"
                    alt="Weather Dashboard"
                    className="card-img-top project-img"
                    height="300"
                    style={{ maxWidth: "500px" }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="project-card-container">
              <div className="card project-card">
                <p className="project-title">Battlehawks Tailgates</p>
                <a
                  href="https://github.com/Steveb175/BattlehawksTailgate"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/Tailgates.PNG"
                    alt="Battlehawks Tailgates"
                    className="card-img-top project-img"
                    height="300"
                    style={{ maxWidth: "500px" }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="project-card-container">
              <div className="card project-card">
                <p className="project-title">Employee Tracker</p>
                <a
                  href="https://github.com/Steveb175/Employee-Tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/employee-tracker.png"
                    alt="Employee Tracker"
                    className="card-img-top project-img"
                    height="300"
                    style={{ maxWidth: "500px" }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="project-card-container">
              <div className="card project-card">
                <p className="project-title">README Generator</p>
                <a
                  href="https://github.com/Steveb175/README-Generator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/readme-generator.png"
                    alt="README Generator"
                    className="card-img-top project-img"
                    height="300"
                    style={{ maxWidth: "500px" }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="project-card-container">
              <div className="card project-card">
                <p className="project-title">Workout Customizer</p>
                <a
                  href="https://github.com/Steveb175/Workout-Customizer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/workoutCustomizer.PNG"
                    alt="Workout Customizer"
                    className="card-img-top project-img"
                    height="300"
                    style={{ maxWidth: "500px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
