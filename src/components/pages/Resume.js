import React from "react";
import "../../styles/styles.css";

export default function Resume() {
  return (
    <div className="container page-div mt-5 pb-5">
      <div className="text-center">
        <h1>Resume</h1>
      </div>
      <div className="d-flex justify-content-center">
        <img
          src="/resume-main.jpg"
          alt="Front of resume."
          className="img-fluid"
        />
      </div>
      <div className="d-flex justify-content-center">
        <img
          src="/resume-back.jpg"
          alt="Back of resume."
          className="img-fluid"
        />
      </div>
    </div>
  );
}
