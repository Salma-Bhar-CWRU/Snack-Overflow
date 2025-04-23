// =============================
// File: server.js
// =============================
/**
 * @file server.js
 * @description Main Express server configuration file.
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();
const authRoutes = require('./routes/auth');
const snackRoutes = require('./routes/snacks');
const orderRoutes = require('./routes/orders'); 
const inventoryRoutes = require('./routes/inventory');
const statsRoutes = require('./routes/stats');

const app = express();

/**
 * Middleware and route handlers setup.
 */
app.use(cors());
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/snacks', snackRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/stats', statsRoutes);

// Serve React frontend
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

/**
 * Starts the server.
 */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


