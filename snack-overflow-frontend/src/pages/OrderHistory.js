// =============================
// OrderHistory.js
// =============================
/**
 * @file OrderHistory.js
 * @description Displays a list of orders made by the currently logged-in user.
 */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeSidebarLayout from '../components/EmployeeSidebarLayout';
import "./../index.css";

function OrderHistory() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/");
      return;
    }
    setUsername(user.username);

    // Fetch user's order history
    axios
      .get(`http://localhost:5000/api/orders/${user.id}`)
      .then((res) => setOrders(res.data))
      .catch(() => alert("Failed to load order history"));
  }, []);

  return (
    <EmployeeSidebarLayout>
      <h1>Order History for <em>{username}</em></h1>
      <div className="order-table-wrapper">
        <table className="order-table">
          <thead>
            <tr>
              <th>Order Number</th>
              <th>Snack Item</th>
              <th>Snack ID</th>
              <th>Date Ordered</th>
              <th>Order Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order.order_id}>
                  <td>{order.order_number}</td>
                  <td>{order.snack_name}</td>
                  <td>#{order.snack_id}</td>
                  <td>{new Date(order.date_ordered).toLocaleDateString()}</td>
                  <td>{order.order_status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No orders found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </EmployeeSidebarLayout>
  );
}

export default OrderHistory;
