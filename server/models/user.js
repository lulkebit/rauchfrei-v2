const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    cigsPerDay: Number,
    cigsPerPack: Number,
    pricePerPack: Number,
    dateOfReturn: Number,
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
