const getcookieToken = require("../common/middleware/cookieToken");
const bcrypt = require("bcrypt");
//const User = require("./models/User");
const axios = require("axios");

// authController.js
class authController {

  static async signup(req, res) {
    try {
      // Extract user data from request body
      const { firstname, lastname, email, password, roleType, company, age } =
        req.body;

      // Check if user already exists
      const existingUser = await axios.post(
        "http://localhost:3003/ifuserexists",
        email
      );
      if (existingUser.IsExists) {
        return res.status(400).json({ message: existingUser.message });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
      const roleid = roleType == "user" ? 1 : 2;

      // Create new user object
      const newUser = new User({
        firstname,
        lastname,
        email,
        password: hashedPassword,
        roleid,
        company,
        age,
      });

      // Make HTTP POST request to the database service's signup endpoint
      const response = await axios.post(
        "http://localhost:3003/signup",
        newUser
      );

      // Return the response from the database service
      res
        .status(response.status)
        .json(response.data, { message: "User created successfully" });
    } catch (error) {
      console.error("Error signing up user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async login(req, res) {
    // Get username and password from request body
    const { username, password } = req.body;

    // Find user by username
    const user =  await users.find((user) => user.username === username);

    // If user not found or password doesn't match, send error response
    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    getcookieToken(user, res);

    res.send("User login");
  }

  static async logout(req, res) {
    // Implement logout logic
    res.send("User logout");
  }
}

module.exports = authController;
