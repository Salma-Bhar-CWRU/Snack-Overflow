const express = require('express');
const db = require('../db'); 
const router = express.Router();

// Fetch all snacks
router.get('/', (req, res) => {
    db.query('SELECT * FROM snacks', (err, results) => {
        if (err) {
            return res.status(500).json({ message: "Failed to fetch snacks", error: err });
        }
        res.json(results);
    });
});

module.exports = router;
