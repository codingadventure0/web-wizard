import React, { useState } from "react";
import "./Connect.css";

const Connect = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="connect-section">
      <h2 className="connect-title">Let's Connect</h2>
      <h3 className="connect-subtitle">
        Have a project in mind? Let's discuss how we can bring your ideas to life.
      </h3>
      <form className="connect-form" onSubmit={handleSubmit}>
        <label htmlFor="name" >Name</label>
        
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="connect-input"
        />
        <label htmlFor="email" >Email</label>
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          required
          className="connect-input"
        />
        <label htmlFor="message" >Message</label>
        <textarea
          name="message"
          placeholder="Tell me about your project..."
          value={form.message}
          onChange={handleChange}
          required
          className="connect-textarea"
          rows={4}
        />
        <button type="submit" className="connect-btn">Send Message</button>
      </form>
    </div>
  );
};

export default Connect;