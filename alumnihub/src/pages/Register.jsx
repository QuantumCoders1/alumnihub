import { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css"; // shared CSS for login/register

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Register attempt:", formData);
    alert("Registered Successfully!");
  };

  return (
    <div className="auth-page">
      {/* Left side illustration */}
      <div className="auth-left">
        <img 
          src="https://www.bizappln.com/image/careers/build-your-career-with-yaali.jpg" 
          alt="Register Illustration" 
        />
      </div>

      {/* Right side register form */}
      <div className="auth-right">
        <div className="auth-box">
          <h2>Create Account</h2>
          <form onSubmit={handleSubmit} className="auth-form">
            <input 
              type="text" 
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required 
            />
            <input 
              type="email" 
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required 
            />
            <input 
              type="password" 
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required 
            />
            <input 
              type="password" 
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required 
            />
            <button type="submit" className="btn-primary">Register</button>
          </form>

          <hr />

          <p className="auth-footer">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
