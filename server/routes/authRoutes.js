const express = require('express');
const router = express.Router();
const cors = require('cors');
const {
    registerUser,
    loginUser,
    getProfile,
    updateUser,
} = require('../controllers/authController');

// middleware
router.use(
    cors({
        credentials: true,
        origin: ['http://localhost:3000'],
    })
);

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', getProfile);
router.post('/update', updateUser);

module.exports = router;
