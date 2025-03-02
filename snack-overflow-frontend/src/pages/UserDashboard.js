import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  }, []);

  // Function to Add Order
  const addToCart = (snackId) => {
    if (!userId) return;

    axios
      .post("http://localhost:5000/api/orders", { userId, snackId })
      .then(() => alert("Item added to order history!"))
      .catch(() => alert("Failed to add order"));
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">🍪 Snack Overflow</div>
        <nav>
          <ul>
            <li className="active">🏠 Home</li>
            <li onClick={() => navigate("/order-history")}>📜 Order History</li>
            <li>👤 Profile</li>
            <li onClick={() => { localStorage.clear(); navigate("/"); }}>🚪 Logout</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        <header>
          <h1>Welcome Back, <em>{username}</em></h1>
          <div className="cart-icon">🛒</div>
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
      </div>
    </div>
  );
}

export default UserDashboard;
