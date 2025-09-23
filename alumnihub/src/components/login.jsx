import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import quantumLogo from "./assets/quantum.jpeg"; // ✅ Keep your logo import

export default function Login() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isRegistering) {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match ❌");
        return;
      }
      try {
        const response = await axios.post("http://localhost:5000/api/register", {
          name: formData.name,
          username: formData.username,
          email: formData.email,
          password: formData.password,
        });
        alert(response.data.message);
        setIsRegistering(false); // Switch to login after registration
      } catch (error) {
        alert(error.response?.data?.message || "Server error ❌");
      }
    } else {
      try {
        const response = await axios.post("http://localhost:5000/api/login", {
          email: formData.email,
          password: formData.password,
        });
        alert(response.data.message);
        console.log("Logged in user:", response.data.user);
        // Optionally: save user info in localStorage or state
      } catch (error) {
        alert(error.response?.data?.message || "Server error ❌");
      }
    }
  };

  return (
    <div className={`login-container design-bg${isRegistering ? " swap" : ""}`}>
      <div className="login-left">
        <img
          src={quantumLogo} // ✅ Use your imported logo
          alt="QuantumCoders Logo"
          className="login-logo"
        />
        <h1>{isRegistering ? "REGISTER" : "LOGIN"}</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          {isRegistering && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          {isRegistering && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          )}
          <button type="submit">{isRegistering ? "Register" : "Login"}</button>
        </form>
        <div className="login-links">
          <button
            onClick={() => setIsRegistering(!isRegistering)}
            className="toggle-register"
          >
            {isRegistering
              ? "Already have an account? Login"
              : "New User? Register"}
          </button>
        </div>
      </div>

      <div className="login-right">
        <img
          src="https://img.freepik.com/free-vector/database-concept-illustration_114360-583.jpg?w=600"
          alt="Alumni Data Management"
        />
      </div>

      <footer className="login-footer">Licensed by QuantumCoders</footer>
    </div>
  );
}
