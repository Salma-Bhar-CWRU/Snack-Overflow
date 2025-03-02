import React, { useState, useEffect } from "react";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]); // State to store orders

  useEffect(() => {
    fetch("https://your-api-endpoint.com/orders") // Replace with your real API
      .then(response => response.json())
      .then(data => setOrders(data)) // Update state with fetched data
      .catch(error => console.error("Error fetching orders:", error));
  }, []);

  return React.createElement(
    "div",
    { className: "order-history-container" },
    React.createElement("h2", { className: "order-history-title" }, 
      "Order History for, ", 
      React.createElement("i", null, "employee name")
    ),
    React.createElement(
      "div",
      { className: "order-history-table" },
      React.createElement(
        "table",
        null,
        React.createElement(
          "thead",
          null,
          React.createElement(
            "tr",
            null,
            React.createElement("th", null, "Order Number"),
            React.createElement("th", null, "Snack Item"),
            React.createElement("th", null, "Snack ID"),
            React.createElement("th", null, "Date Ordered"),
            React.createElement("th", null, "Order Status")
          )
        ),
        React.createElement(
          "tbody",
          null,
          orders.length > 0
            ? orders.map((order, index) =>
                React.createElement(
                  "tr",
                  { key: index },
                  React.createElement("td", null, order.orderNumber),
                  React.createElement("td", null, order.snack),
                  React.createElement("td", null, order.snackId),
                  React.createElement("td", null, order.date),
                  React.createElement(
                    "td",
                    { className: `status ${order.status.toLowerCase()}` },
                    order.status
                  )
                )
              )
            : React.createElement(
                "tr",
                null,
                React.createElement(
                  "td",
                  { colSpan: "5" },
                  "Loading orders..."
                )
              )
        )
      )
    )
  );
};

export default OrderHistory;

