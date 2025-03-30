const express = require("express");
const db = require("../db"); 
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

// Fetch a specific user's order history
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

// Update order status (approve/deny)
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

// Place a new order with inventory + limit control
router.post("/", (req, res) => {
  const { userId, snackId } = req.body;
  const today = new Date().toISOString().split("T")[0];

  // Step 1: Check user's order count for today
  db.query(
    `SELECT COUNT(*) AS count FROM orders WHERE user_id = ? AND date_ordered = ?`,
    [userId, today],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });

      if (result[0].count >= 3) {
        return res.status(403).json({ message: "Daily order limit reached." });
      }

      // Step 2: Check inventory
      db.query(
        `SELECT quantity FROM inventory WHERE snack_id = ?`,
        [snackId],
        (err, result) => {
          if (err) return res.status(500).json({ error: err });

          if (!result.length || result[0].quantity < 1) {
            return res.status(400).json({ message: "Snack out of stock." });
          }

          // Step 3: Reduce inventory by 1
          db.query(
            `UPDATE inventory SET quantity = quantity - 1 WHERE snack_id = ?`,
            [snackId],
            (err) => {
              if (err) return res.status(500).json({ error: err });

              // Step 4: Insert new order
              const orderNumber = `ORD-${Math.floor(1000 + Math.random() * 9000)}`;
              db.query(
                `INSERT INTO orders (order_number, user_id, snack_id, date_ordered, order_status)
                 VALUES (?, ?, ?, ?, 'Pending')`,
                [orderNumber, userId, snackId, today],
                (err) => {
                  if (err) return res.status(500).json({ error: err });
                  res.json({ message: "Order placed!" });
                }
              );
            }
          );
        }
      );
    }
  );
});

module.exports = router;
