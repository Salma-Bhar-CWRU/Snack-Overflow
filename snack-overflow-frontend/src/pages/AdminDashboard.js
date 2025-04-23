// =============================
// AdminDashboard.js
// =============================
/**
 * @file AdminDashboard.js
 * @description Admin view to manage and approve/reject orders.
 */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SidebarLayout from "../components/SidebarLayout";
import "./../index.css";

function AdminDashboard() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [adminName, setAdminName] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || user.userType !== "admin") {
      navigate("/");
      return;
    }
    setAdminName(user.username);

    // Fetch all orders
    axios.get("http://localhost:5000/api/orders")
      .then((res) => setOrders(res.data))
      .catch(() => alert("Failed to load orders"));
  }, [navigate]);

  const updateOrderStatus = (orderId, status) => {
    axios.patch(`http://localhost:5000/api/orders/${orderId}`, { order_status: status })
      .then(() => {
        setOrders((prevOrders) => prevOrders.map(order => 
          order.order_id === orderId ? { ...order, order_status: status } : order
        ));
        alert(`Order ${status}`);
      })
      .catch(() => alert("Failed to update order status"));
  };

  return (
    <SidebarLayout>
      <h1>Welcome, {adminName}</h1>

      <div className="order-table-wrapper">
        <h2>📜 All Orders</h2>
        <table className="order-table">
          <thead>
            <tr>
              <th>Order Number</th>
              <th>User ID</th>
              <th>Snack</th>
              <th>Date Ordered</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order.order_id}>
                  <td>{order.order_number}</td>
                  <td>{order.user_id}</td>
                  <td>{order.snack_name}</td>
                  <td>{new Date(order.date_ordered).toLocaleDateString()}</td>
                  <td>{order.order_status}</td>
                  <td>
                    <button
                      onClick={() => updateOrderStatus(order.order_id, "Approved")}
                      style={{ marginRight: "5px", backgroundColor: "green", color: "white", border: "none", padding: "5px", cursor: "pointer" }}
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => updateOrderStatus(order.order_id, "Denied")}
                      style={{ backgroundColor: "red", color: "white", border: "none", padding: "5px", cursor: "pointer" }}
                    >
                      Decline
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No orders found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </SidebarLayout>
  );
}

export default AdminDashboard;
