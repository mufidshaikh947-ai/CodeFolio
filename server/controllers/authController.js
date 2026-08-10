const bcrypt = require("bcryptjs");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Register User
const registerUser = async (req, res) => {
    try {

        const name = req.body.name?.trim();
        const username = req.body.username?.trim().toLowerCase();
        const email = req.body.email?.trim().toLowerCase();
        const password = req.body.password;
const plan = req.body.plan || "free";

        if (!name || !username || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Name, username, email and password are required."
            });
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({
                success: false,
                message: "Invalid email address."
            });
        }

        if (!validator.isAlphanumeric(username)) {
            return res.status(400).json({
                success: false,
                message: "Username should contain only letters and numbers."
            });
        }

        if (password.length < 6) {
            return res.status(400).json({
                success: false,
                message: "Password must be at least 6 characters."
            });
        }

        const existingEmail = await User.findOne({ email });

        if (existingEmail) {
            return res.status(400).json({
                success: false,
                message: "Email already registered."
            });
        }

        const existingUsername = await User.findOne({ username });

        if (existingUsername) {
            return res.status(400).json({
                success: false,
                message: "Username already exists."
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
username,
email,
password: hashedPassword,

isPro: plan === "pro"
        });

        res.status(201).json({
            success: true,
            message: "Registration successful.",
           user: {

    _id: user._id,
    name: user.name,
    username: user.username,
    email: user.email,
    isPro: user.isPro,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt

}
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Internal server error."
        });

    }
};

// Login User
const loginUser = async (req, res) => {
    try {

        const email = req.body.email?.trim().toLowerCase();
        const password = req.body.password;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required."
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid email or password."
            });
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password);

        if (!isPasswordMatched) {
            return res.status(400).json({
                success: false,
                message: "Invalid email or password."
            });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );

        res.status(200).json({
            success: true,
            message: "Login successful.",
            token,
          user: {

    _id: user._id,
    name: user.name,
    username: user.username,
    email: user.email,
    isPro: user.isPro,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt

}
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Internal server error."
        });

    }
};

// Get Current User
const getCurrentUser = async (req, res) => {
    try {

        const user = await User.findById(req.user.id).select("-password");

        res.status(200).json({
            success: true,
            user
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Internal server error."
        });

    }
};

module.exports = {
    registerUser,
    loginUser,
    getCurrentUser
};