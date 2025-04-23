// =============================
// File: snacks.js
// =============================
/**
 * @module routes/snacks
 * @description Snack data endpoints.
 */
const express = require('express');
const db = require('../db'); 
const router = express.Router();

/**
 * Fetches all snacks.
 * @route GET /
 * @access Public
 */
router.get('/', (req, res) => {
    db.query('SELECT * FROM snacks', (err, results) => {
        if (err) {
            return res.status(500).json({ message: "Failed to fetch snacks", error: err });
        }
        res.json(results);
    });
});

module.exports = router;
