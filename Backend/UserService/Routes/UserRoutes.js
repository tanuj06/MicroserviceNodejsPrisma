// user-routes.js

const express = require('express');
const router = express.Router();
const userController = require('../Controllers/UserController')

// Routes for handling user operations

// Create a new user
router.post('/createuser', userController.createUser);

// Get all users
router.get('/getallusers', userController.getUsers);

// Get a user by ID
router.get('/getuser:id', userController.getUserById);

// Update a user by ID
router.put('/updateuser:id', userController.updateUserById);

// Delete a user by ID
router.delete('/deleteuser:id', userController.deleteUserById);

module.exports = router;
