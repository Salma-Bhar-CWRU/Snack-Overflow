// =============================
// UserDashboard.js
// =============================
/**
 * @file UserDashboard.js
 * @description Allows users to browse and order snacks within daily limits.
 */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeSidebarLayout from '../components/EmployeeSidebarLayout';
import "./../index.css";

function UserDashboard() {
  const navigate = useNavigate();
  const [snacks, setSnacks] = useState([]);
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || user.userType !== "user") {
      navigate("/");
    } else {
      setUsername(user.username);
      setUserId(user.id);
    }

    // Fetch snacks from database
    axios
      .get("http://localhost:5000/api/snacks")
      .then((res) => setSnacks(res.data))
      .catch(() => alert("Failed to load snacks"));
  }, [navigate]);

  const addToCart = (snackId) => {
    if (!userId) return;
  
    axios
      .post("http://localhost:5000/api/orders", { userId, snackId })
      .then(() => alert("Item added to order history!"))
      .catch((err) => {
        if (err.response?.status === 403) {
          alert("❌ You've reached your daily order limit of 3.");
        } else if (err.response?.status === 400) {
          alert("❌ That snack is out of stock.");
        } else {
          alert("Failed to place order.");
        }
      });
  };

  return (
    <EmployeeSidebarLayout>
      <header>
        <h1>Welcome Back, <em>{username}</em></h1>
      </header>
  
      {/* Snacks Grid */}
      <div className="snacks-grid">
        {snacks.map((snack) => (
          <div key={snack.snack_id} className="snack-card">
            <div className="snack-placeholder">{snack.snack_name}</div>
            <button className="add-to-cart" onClick={() => addToCart(snack.snack_id)}>+ Order</button>
          </div>
        ))}
      </div>
    </EmployeeSidebarLayout>
  );
}

export default UserDashboard;
