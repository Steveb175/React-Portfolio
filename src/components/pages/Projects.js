import React from "react";

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
            <a href="https://steveb175.github.io/Brewery-Finder/">
              <img
                src="/brewery-finder.PNG"
                alt="Brewery Finder"
                className="card-img-top"
                height="300"
              />
            </a>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <a href="https://steveb175.github.io/Weather-Dashboard/">
              <img
                src="/weather-dashboard.PNG"
                alt="Weather Dashboard"
                className="card-img-top"
                height="300"
              />
            </a>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <a href="https://github.com/Steveb175/BattlehawksTailgate">
              <img
                src="/Tailgates.PNG"
                alt="Battlehawks Tailgates"
                className="card-img-top"
                height="300"
              />
            </a>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <a href="https://github.com/Steveb175/Employee-Tracker">
              <img
                src="/employee-tracker.png"
                alt="Employee Tracker"
                className="card-img-top"
                height="300"
              />
            </a>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <a href="https://github.com/Steveb175/README-Generator">
              <img
                src="/readme-generator.png"
                alt="README Generator"
                className="card-img-top"
                height="300"
              />
            </a>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <a href="https://github.com/Steveb175/Daily-Planner">
              <img
                src="/Daily-Planner-Gif.gif"
                alt="Daily Planner"
                className="card-img-top"
                height="300"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
