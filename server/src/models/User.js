const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  password: String,
  email: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
