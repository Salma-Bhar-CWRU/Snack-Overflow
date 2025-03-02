import axios from "axios";
import React, { useState } from "react";
import "./../index.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/forgot-password", { email });
      alert(response.data.message);
    } catch (error) {
      alert("Error sending reset link.");
    }
  };

  return (
    <div className="container">
      <h1>Forgot Password</h1>
      <p>Enter your email, and we’ll send you a reset link.</p>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
