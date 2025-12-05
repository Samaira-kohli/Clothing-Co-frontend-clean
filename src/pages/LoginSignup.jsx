import React, { useState } from "react";
import "./Login.css";

function LoginSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    // add login logic here
  };

  return (
    <div className="login-container">
      <h1 className="login-title">LOGIN</h1>
      <p className="login-subtitle">
        Enter your email and password to login:
      </p>

      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className="password-wrapper">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <a href="#" className="forgot-password">
            Forgot your password?
          </a>
        </div>

        <button type="submit" className="login-btn">
          LOGIN
        </button>
      </form>

      <p className="signup-text">
        Don’t have an account? <a href="#">Sign up</a>
      </p>
    </div>
  );
}

export default LoginSignup;
