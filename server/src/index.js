const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/users');

app.post('/register', (req, res) => {
  User.create(req.body)
    .then((User) => res.json(User))
    .catch((e) => res.json(e.message));
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json('Success');
      } else {
        res.json('Invalid password');
      }
    } else {
      res.json('User not found');
    }
  });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
