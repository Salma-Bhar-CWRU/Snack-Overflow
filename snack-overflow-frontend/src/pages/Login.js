// =============================
// Login.js
// =============================
/**
 * @file Login.js
 * @description Authentication form with login and registration tab toggle.
 */
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../index.css";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  // Login state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Register state
  const [username, setUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [userType, setUserType] = useState("user");

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });

        if (!response.data || !response.data.token || !response.data.user) {
            throw new Error("Invalid response from server");
        }

        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        if (response.data.user.userType === "admin") {
            navigate("/admin-dashboard"); 
        } else {
            navigate("/dashboard"); 
        }
    } catch (error) {
        alert("Login failed. Please try again.");
    }
};


  // Handle Register
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", { username, email: registerEmail, password: registerPassword, userType });
      alert("Registration successful!");
      setIsLogin(true); // Switch to login form
    } catch (error) {
      alert("Error registering");
    }
  };

  return (
    <div className="container">
      <h1>Snack Overflow</h1>
      <p>Because one snack is never enough</p>

      {/* Tab Switching */}
      <div className="tabs">
        <button className={isLogin ? "active" : ""} onClick={() => setIsLogin(true)}>Login</button>
        <button className={!isLogin ? "active" : ""} onClick={() => setIsLogin(false)}>Register</button>
      </div>

      {/* Login Form */}
      {isLogin ? (
        <form className="active" onSubmit={handleLogin}>
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Login</button>
          <a href="/forgot-password" className="forgot-password">Forgot my password?</a>
        </form>
      ) : (
        /* Register Form */
        <form className="active" onSubmit={handleRegister}>
          <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
          <input type="email" placeholder="Email" onChange={(e) => setRegisterEmail(e.target.value)} required />
          <input type="password" placeholder="Password" onChange={(e) => setRegisterPassword(e.target.value)} required />
          
          <div className="form-group">
            <label>User Type</label>
            <select onChange={(e) => setUserType(e.target.value)}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button type="submit">Register</button>
        </form>
      )}
    </div>
  );
}

export default Login;
