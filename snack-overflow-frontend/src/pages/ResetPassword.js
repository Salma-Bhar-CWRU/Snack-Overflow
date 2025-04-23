// =============================
// ResetPassword.js
// =============================
/**
 * @file ResetPassword.js
 * @description Allows users to reset their password using a token.
 */
import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./../index.css";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5000/api/auth/reset-password/${token}`, { password });
      alert(response.data.message);
      navigate("/");
    } catch (error) {
      alert("Error resetting password.");
    }
  };

  return (
    <div className="container">
      <h1>Reset Password</h1>
      <p>Enter your new password below.</p>
      <form onSubmit={handleReset}>
        <input type="password" placeholder="New Password" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default ResetPassword;
