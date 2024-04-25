const express = require('express');
const userRoutes = require('../UserService/Routes/UserRoutes'); // Assuming userRoutes.js is in the same directory

const app = express();

// Use JSON middleware to parse request bodies
app.use(express.json());

// Mount the user routes at the '/users' endpoint
app.use('/users', userRoutes);

// Define a default route
app.get('/', (req, res) => {
  res.send('Welcome to the user service');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
