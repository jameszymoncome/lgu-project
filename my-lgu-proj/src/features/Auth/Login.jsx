import React, { useState } from "react";
import { TextField, Button, Checkbox, FormControlLabel, Typography, Link } from "@mui/material";
import "./Login.css"; // Custom CSS for additional styles
import Logo from "/ppe_logo.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await response.json();
      console.log("Response:", data);
  
      if (data.success) {
        localStorage.setItem("authToken", data.token);
        navigate("/home");
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };
  

  return (
    <div className="login-container">
      {/* Left Section */}
      <div className="left-section">
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <Typography variant="h6" className="system-title" style={{ fontSize: "1.7rem" }}>
          Property, Plant and Equipment <br /> Management System
        </Typography>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <Typography variant="h4" className="login-title" style={{ fontWeight: "bold" }}>
          LOG IN
        </Typography>
        <Typography variant="subtitle1" className="welcome-text">
          Welcome back!
        </Typography>
        <form className="login-form" onSubmit={handleLogin}>
          {/* Email Field */}
          <TextField
            label="Username*"
            placeholder="Enter your username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          {/* Password Field */}
          <TextField
            label="Password*"
            placeholder="Minimum 8 characters"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Error Message */}
          {errorMessage && <Typography color="error">{errorMessage}</Typography>}

          {/* Remember Me and Forgot Password */}
          <div className="form-options">
            <FormControlLabel
              control={<Checkbox style={{ color: "#0F1D9F" }} />}
              label="Remember me"
            />
            <Link href="#" className="forgot-password">
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            style={{
              backgroundColor: "#0F1D9F",
              color: "#FFF",
              textTransform: "none",
              marginTop: "1rem",
              borderRadius: "25px",
              width: "25rem",
              padding: "15px",
              fontWeight: "bold",
              marginLeft: "15rem",
            }}
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;