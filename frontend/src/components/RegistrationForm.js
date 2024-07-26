import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";
import { URL } from "../url";
import { Link, useNavigate } from "react-router-dom";
import "./styles/LoginForm.css";
function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(`${URL}/api/users/register`, {
        username,
        password,
      });
      setSuccess("Registration successful. You can now log in.");
      setError("");
      setUsername("");
      setPassword("");
      setConfirmPassword("");
      navigate("/login");
    } catch (error) {
      setError("Registration failed. Please try again.");
      console.error("Error during registration:", error);
    }
  };

  return (
    <div>
      <Header />
      <div>
        <h2
          className="login-title"
          style={{ margin: "10px", marginLeft: "20px" }}
        >
          Register Form
        </h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && (
          <p style={{ color: "green", marginLeft: "20px" }}>{success}</p>
        )}
        <form onSubmit={handleSubmit} className="login-section">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required
          />
          <button className="get-started" type="submit">
            Register
          </button>
          <p style={{ marginTop: "10px" }}>
            Already have an account <Link to="/login">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
