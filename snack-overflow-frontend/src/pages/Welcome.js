// =============================
// Welcome.js
// =============================
/**
 * @file Welcome.js
 * @description Greets the user post-login and offers a logout button.
 */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../index.css";

function Welcome() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/");
    } else {
      setUsername(user.username);
    }
  }, []);

  return (
    <div className="welcome-container">
      <h1>Welcome, {username} to Snack Overflow!</h1>
      <p>Ready to snack?</p>
      <button onClick={() => {
        localStorage.clear();
        navigate("/");
      }}>Logout</button>
    </div>
  );
}

export default Welcome;
