const express = require("express");
const db = require("../db"); 
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

// Fetch user's order history
router.get("/:userId", (req, res) => {
  const { userId } = req.params;

  db.query(
    `SELECT orders.order_id, orders.order_number, snacks.snack_name, orders.snack_id, orders.date_ordered, orders.order_status 
     FROM orders 
     JOIN snacks ON orders.snack_id = snacks.snack_id 
     WHERE orders.user_id = ? 
     ORDER BY orders.date_ordered DESC`,
    [userId],
    (err, results) => {
      if (err) return res.status(500).json({ message: "Failed to fetch orders", error: err });
      res.json(results);
    }
  );
});

// Add an order when user clicks "Add to Cart"
router.post("/", (req, res) => {
  const { userId, snackId } = req.body;
  const orderNumber = uuidv4().slice(0, 8).toUpperCase(); // Generate a unique order number
  const orderStatus = "Pending";
  const dateOrdered = new Date().toISOString().slice(0, 10); // YYYY-MM-DD format

  db.query(
    "INSERT INTO orders (order_number, user_id, snack_id, date_ordered, order_status) VALUES (?, ?, ?, ?, ?)",
    [orderNumber, userId, snackId, dateOrdered, orderStatus],
    (err, result) => {
      if (err) return res.status(500).json({ message: "Failed to add order", error: err });
      res.json({ message: "Order added successfully" });
    }
  );
});

// Fetch all orders (for admins)
router.get("/", (req, res) => {
    db.query(
      `SELECT orders.order_id, orders.order_number, orders.user_id, snacks.snack_name, orders.date_ordered, orders.order_status 
       FROM orders 
       JOIN snacks ON orders.snack_id = snacks.snack_id 
       ORDER BY orders.date_ordered DESC`,
      (err, results) => {
        if (err) return res.status(500).json({ message: "Failed to fetch orders", error: err });
        res.json(results);
      }
    );
  });
  
// Update order status
router.patch("/:orderId", (req, res) => {
    const { orderId } = req.params;
    const { order_status } = req.body;
  
    if (!["Approved", "Denied"].includes(order_status)) {
      return res.status(400).json({ error: "Invalid order status" });
    }
  
    db.query(
      "UPDATE orders SET order_status = ? WHERE order_id = ?",
      [order_status, orderId],
      (err, result) => {
        if (err) return res.status(500).json({ message: "Failed to update order status", error: err });
        if (result.affectedRows === 0) return res.status(404).json({ message: "Order not found" });
        res.json({ message: `Order status updated to ${order_status}` });
      }
    );
  });
  
  
module.exports = router;
