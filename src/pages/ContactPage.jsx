import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import './ContactPage.css'; // Custom CSS file for styles.

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formValid, setFormValid] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValid) {
      // Handle form submission here
      console.log("Form Submitted", formData);
    }
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    const isValid = name && email && message && /\S+@\S+\.\S+/.test(email);
    setFormValid(isValid);
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3 contact-page">
        <h1 className="text-center text-primary">Contact Us</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-6 col-lg-6 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="form-group my-3">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={validateForm}
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={validateForm}
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="message">Message</label>
                <textarea
                  rows={5}
                  className="form-control"
                  id="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={validateForm}
                />
              </div>
              <div className="text-center">
                <button
                  className="my-2 px-4 mx-auto btn btn-primary"
                  type="submit"
                  disabled={!formValid}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
