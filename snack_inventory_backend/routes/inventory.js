// =============================
// File: inventory.js
// =============================
/**
 * @module routes/inventory
 * @description Inventory management routes.
 */
const express = require('express');
const router = express.Router();
const db = require('../db');

/**
* Retrieves all inventory items.
* @route GET /
* @access Admin
*/
router.get('/', (req, res) => {
  db.query(`
    SELECT i.inventory_id, s.snack_name, i.quantity, i.expiry_date, i.reorder_quantity
    FROM inventory i
    JOIN snacks s ON i.snack_id = s.snack_id
  `, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});


/**
 * Adds a new inventory item.
 * @route POST /
 * @access Admin
 */
router.post('/', (req, res) => {
  const { snack_id, quantity, expiry_date, reorder_quantity } = req.body;
  db.query(`
    INSERT INTO inventory (snack_id, quantity, expiry_date, reorder_quantity)
    VALUES (?, ?, ?, ?)
  `, [snack_id, quantity, expiry_date, reorder_quantity], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Inventory added." });
  });
});

module.exports = router;
