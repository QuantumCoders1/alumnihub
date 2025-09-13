import { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css"; // shared CSS for login/register

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", email, password);
  };

  return (
    <div className="auth-page">
      {/* Left side illustration */}
      <div className="auth-left">
        <img 
          src="https://asb.icai.org/quiz_admin/assets/quiz/images/signin-image.jpg" 
          alt="Illustration" 
        />
      </div>

      {/* Right side login form */}
      <div className="auth-right">
        <div className="auth-box">
          <h2>Log in</h2>
          <form onSubmit={handleSubmit} className="auth-form">
            <input 
              type="email" 
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
            <input 
              type="password" 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
            <button type="submit" className="btn-primary">Log in</button>
          </form>

          <hr />

          <p className="auth-footer">
            Don’t have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
