// =============================
// File: stats.js
// =============================
/**
 * @module routes/stats
 * @description Provides statistics about snack orders.
 */
const express = require('express');
const router = express.Router();
const db = require('../db');

/**
 * Gets monthly order count per snack.
 * @route GET /monthly
 * @access Admin
 */
router.get('/monthly', (req, res) => {
  db.query(`
    SELECT s.snack_name, COUNT(*) as number_of_orders
    FROM orders o
    JOIN snacks s ON o.snack_id = s.snack_id
    WHERE MONTH(o.date_ordered) = MONTH(CURRENT_DATE())
    GROUP BY o.snack_id
  `, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

module.exports = router;
