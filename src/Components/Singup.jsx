import React, { useState } from "react";
import "../index.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "firstName":
        if (!value.trim()) {
          error = "First name is required";
        }
        break;

      case "lastName":
        if (!value.trim()) {
          error = "Last name is required";
        }
        break;

      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) {
          error = "Email is required";
        } else if (!emailRegex.test(value)) {
          error = "Please enter a valid email address";
        }
        break;

      case "phone":
        const phoneRegex = /^\+?[\d\s-]{10,}$/;
        if (!value) {
          error = "Phone number is required";
        } else if (!phoneRegex.test(value)) {
          error = "Please enter a valid phone number";
        }
        break;

      case "password":
        if (!value) {
          error = "Password is required";
        } else if (value.length < 8) {
          error = "Password must be at least 8 characters long";
        }
        break;

      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    const error = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      newErrors[key] = validateField(key, formData[key]);
    });

    setErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).every((error) => !error)) {
      const formattedData = {
        ...formData,
        phone: Number(formData.phone),
      };

      console.log(formattedData);
      // console.log("Form submitted:", formData);
      // Handle form submission here
    }
  };

  return (
    <div className="container">
      <h1>Ready to take a free trial?</h1>
      <p className="intro-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore
      </p>

      <div className="form-box">
        <h2>Sign up for a free account</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-row">
            <div className="input-group">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className={errors.firstName ? "error" : ""}
              />
              {errors.firstName && (
                <span className="error-message">{errors.firstName}</span>
              )}
            </div>

            <div className="input-group">
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                className={errors.lastName ? "error" : ""}
              />
              {errors.lastName && (
                <span className="error-message">{errors.lastName}</span>
              )}
            </div>
          </div>

          <div className="input-row">
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "error" : ""}
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            <div className="input-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? "error" : ""}
              />
              {errors.phone && (
                <span className="error-message">{errors.phone}</span>
              )}
            </div>
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Create password"
              value={formData.password}
              onChange={handleChange}
              className={`full-width ${errors.password ? "error" : ""}`}
            />
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>

          <button type="submit" className="submit-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
