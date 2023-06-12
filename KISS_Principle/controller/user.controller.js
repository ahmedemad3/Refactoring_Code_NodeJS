// userController.js
const express = require('express');
const router = express.Router();
const db = require('../database'); // Assume you have a database connection module
const bcrypt = require('bcrypt');

router.post('/user', (req, res) => {
    const userData = req.body;

    // Validate input data
    if (!userData.name || !userData.email || !userData.password) {
        res.status(400).json({ message: 'Missing required fields' });
        return;
    }
    // Check if the email is already registered
    const existingUser = db.query('SELECT * FROM users WHERE email = $1', [email]);
    if (existingUser.rows.length > 0) {
        throw new Error('Email already registered');
    }

    // Hash the password
    const salt = bcrypt.genSalt(10);
    const hashedPassword = bcrypt.hash(password, salt);

    // Create a new user
    const newUser = db.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *', [name, email, hashedPassword]);
    return newUser.rows[0];


});

module.exports = router;
