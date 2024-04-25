const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Import routes
const authRoutes = require('./routes/authRoutes');

//default middleware
app.use(express.json())
app.use(express.urlencoded({extended : true}))


// Mount routes
app.use('/auth', authRoutes);


app.get('/', (req, res) => {
  res.send('Authentication Service');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
