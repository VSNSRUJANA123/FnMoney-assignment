import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import "./styles/LoginForm.css";
import { URL } from "../url";
function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `${URL}/api/users/login`,
        { username, password },
        { withCredentials: true }
      );

      if (response.data.token) {
        localStorage.setItem("authToken", response.data.token);
        navigate("/assessments");
      } else {
        setError("Failed to log in. Please try again.");
      }
    } catch (error) {
      setError("Login failed. Please check your username and password.");
      console.error("Error during login:", error);
    }
  };

  return (
    <div>
      <Header />
      <div>
        <h2 className="login-title">Login</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
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
          <button className="get-started" type="submit">
            Login
          </button>
        </form>
        <p style={{ margin: "10px" }}>
          create a user <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
