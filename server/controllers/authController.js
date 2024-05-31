const User = require('../models/user');
const { hashPassword, comparePassword } = require('../helpers/auth');

const test = (req, res) => {
    res.json({ message: 'Test works!' });
};

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
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

        const hashedPassword = await hashPassword(password);
        // create user in database
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
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
            return res.json({
                message: 'Passwords match',
            });
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

module.exports = {
    test,
    registerUser,
    loginUser,
};
