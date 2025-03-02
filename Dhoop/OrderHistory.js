import React, { useState, useEffect } from "react";
import "./OrderHistory.css"; // Ensure you have a CSS file for styling

const OrderHistory = () => {
  const [orders, setOrders] = useState([]); // State to store orders
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    fetch("https://your-api-endpoint.com/orders") // Replace with your real API
      .then(response => response.json())
      .then(data => {
        setOrders(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching orders:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="order-history-container">
      <h2 className="order-history-title">
        Order History for <i>Employee Name</i>
      </h2>
      
      <div className="order-history-table">
        <table>
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
            {loading ? (
              <tr>
                <td colSpan="5">Loading orders...</td>
              </tr>
            ) : orders.length > 0 ? (
              orders.map((order, index) => (
                <tr key={index}>
                  <td>{order.orderNumber}</td>
                  <td>{order.snack}</td>
                  <td>{order.snackId}</td>
                  <td>{order.date}</td>
                  <td className={`status ${order.status.toLowerCase()}`}>
                    {order.status}
                  </td>
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
    </div>
  );
};

export default OrderHistory;


