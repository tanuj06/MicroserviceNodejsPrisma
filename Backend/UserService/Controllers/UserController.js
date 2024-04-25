const userModel = require("../Models/UserModel");

class UserController {
  // Controller function to handle user creation
  static async createUser(req, res) {
    try {
      const userData = req.body;
      const newUser = await userModel.createUser(userData);
      res.status(201).json(newUser);
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  // Controller function to handle user retrieval
  static async getUsers(req, res) {
    try {
      const users = await userModel.getUsers();
      res.status(200).json(users);
    } catch (error) {
      console.error("Error getting users:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  // Controller function to handle user retrieval by ID
  static async getUserById(req, res) {
    try {
      const userId = parseInt(req.params.id);
      const user = await userModel.getUserById(userId);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      console.error("Error getting user by ID:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  // Controller function to handle user update by ID
  static async updateUserById(req, res) {
    try {
      const userId = parseInt(req.params.id);
      const updatedUserData = req.body;
      const updatedUser = await userModel.updateUserById(
        userId,
        updatedUserData
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      console.error("Error updating user by ID:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  // Controller function to handle user deletion by ID
  static async deleteUserById(req, res) {
    try {
      const userId = parseInt(req.params.id);
      const deletedUser = await userModel.deleteUserById(userId);
      res.status(200).json(deletedUser);
    } catch (error) {
      console.error("Error deleting user by ID:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

module.exports = UserController
