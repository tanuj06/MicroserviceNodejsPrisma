const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class UserModel {
  // Function to create a new user
  static async createUser(userData) {
    try {
      const newUser = await prisma.user.create({
        data: userData,
      });
      return newUser;
    } catch (error) {
      throw error;
    }
  }

  // Function to get all users
  static async getUsers() {
    try {
      const users = await prisma.user.findMany();
      return users;
    } catch (error) {
      throw error;
    }
  }

  // Function to get a user by ID
  static async getUserById(userId) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id: userId,
        },
      });
      return user;
    } catch (error) {
      throw error;
    }
  }

  // Function to update a user by ID
  static async updateUserById(userId, updatedUserData) {
    try {
      const updatedUser = await prisma.user.update({
        where: {
          id: userId,
        },
        data: updatedUserData,
      });
      return updatedUser;
    } catch (error) {
      throw error;
    }
  }

  // Function to delete a user by ID
  static async deleteUserById(userId) {
    try {
      const deletedUser = await prisma.user.delete({
        where: {
          id: userId,
        },
      });
      return deletedUser;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserModel
