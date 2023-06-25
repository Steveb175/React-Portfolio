import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message:
          </label>
          <textarea
            id="message"
            className="form-control"
            value={message}
            onChange={handleMessageChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
}
