// authRoutes.js
const express = require('express');
const router = express.Router();

// Import controllers
const { signup, login, logout } = require('../controllers/authControllers');

// Routes
router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logout);

module.exports = router;
