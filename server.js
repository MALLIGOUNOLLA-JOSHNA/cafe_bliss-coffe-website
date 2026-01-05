/**
 * Café Bliss Backend Server
 * Main server file that sets up Express, middleware, and routes
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

// Import route handlers
const adminRoutes = require('./backend/routes/adminRoutes');
const menuRoutes = require('./backend/routes/menuRoutes');
const orderRoutes = require('./backend/routes/orderRoutes');
const Admin = require('./backend/models/Admin');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (frontend HTML, CSS, images)
app.use(express.static(path.join(__dirname)));

// API Routes
app.use('/api/admin', adminRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/orders', orderRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Café Bliss API is running' });
});

// Initialize default admin on startup
Admin.initializeDefaultAdmin().catch(err => {
  console.error('Error initializing default admin:', err);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Café Bliss server running on http://localhost:${PORT}`);
  console.log(`📊 Admin dashboard: http://localhost:${PORT}/admin/login.html`);
  console.log(`👤 Default admin: admin@cafebliss.com / admin123`);
});

module.exports = app;
