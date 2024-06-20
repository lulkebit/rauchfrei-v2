const User = require('../models/user');
const { hashPassword, comparePassword } = require('../helpers/auth');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    try {
        const {
            name,
            email,
            password,
            cigsPerDay,
            cigsPerPack,
            pricePerPack,
            dateOfReturn,
        } = req.body;
        // check if name was entered
        if (!name) {
            return res.json({
                error: 'Name is required',
            });
        }

        // check if password is good
        if (!password || password.length < 6) {
            return res.json({
                error: 'Password is required and should be 6 characters long',
            });
        }

        // check email
        const exist = await User.findOne({ email });
        if (exist) {
            return res.json({
                error: 'Email is taken',
            });
        }

        if (!cigsPerDay || !cigsPerPack || !pricePerPack || !dateOfReturn) {
            return res.json({
                error: 'Please enter all fields',
            });
        }

        const hashedPassword = await hashPassword(password);
        // create user in database
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            cigsPerDay,
            cigsPerPack,
            pricePerPack,
            dateOfReturn,
        });

        return res.json(user);
    } catch (error) {
        console.log('Error on registerUser', error);
        return res.json({
            error: 'Error. Please try again.',
        });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({
                error: 'No user found',
            });
        }

        // check password
        const match = await comparePassword(password, user.password);
        if (match) {
            jwt.sign(
                {
                    email: user.email,
                    id: user._id,
                    name: user.name,
                    cigsPerDay: user.cigsPerDay,
                    cigsPerPack: user.cigsPerPack,
                    pricePerPack: user.pricePerPack,
                    dateOfReturn: user.dateOfReturn,
                },
                process.env.JWT_SECRET,
                {},
                (err, token) => {
                    if (err) throw err;
                    res.cookie('token', token).json(user);
                }
            );
            console.log('User logged in:', user);
        } else {
            return res.json({
                error: 'Invalid Password',
            });
        }
    } catch (error) {
        console.log('Error on loginUser', error);
        return res.json({
            error: 'Error. Please try again.',
        });
    }
};

const getProfile = (req, res) => {
    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            if (err) {
                // If the token is invalid or expired
                return res.json({ error: 'Invalid token' });
            }
            res.json(user);
        });
    } else {
        res.json('No token found');
    }
};

const updateUser = async (req, res) => {
    try {
        const { cigsPerDay, cigsPerPack, pricePerPack, dateOfReturn } =
            req.body;
        const { token } = req.cookies;
        if (token) {
            jwt.verify(token, process.env.JWT_SECRET, {}, async (err, user) => {
                if (err) throw err;
                const updatedUser = await User.findByIdAndUpdate(
                    user.id,
                    {
                        cigsPerDay,
                        cigsPerPack,
                        pricePerPack,
                        dateOfReturn,
                    },
                    { new: true }
                );
                res.json(updatedUser);
            });
        } else {
            res.json('No token found');
        }
    } catch (error) {
        console.log('Error on updateUser', error);
        return res.json({
            error: 'Error. Please try again.',
        });
    }
};

const logoutUser = (req, res) => {
    try {
        res.clearCookie('token');
        res.json({ message: 'User logged out' });
    } catch (error) {
        console.log('Error on user logout', error.message);
        return res.json({
            error: error.message,
        });
    }
};

module.exports = {
    registerUser,
    loginUser,
    getProfile,
    updateUser,
    logoutUser,
};
