const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');

// database connection
console.log('Connecting to database...');
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Database connected');
  })
  .catch((err) => {
    console.log('Error connecting to database', err);
  });

const app = express();

app.use('/', require('./routes/authRoutes'));

const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
