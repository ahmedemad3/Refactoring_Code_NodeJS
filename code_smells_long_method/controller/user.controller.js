// userController.js
const express = require('express');
const router = express.Router();
const { Pool } = require('pg');

const pool = new Pool({
  user: 'db_user',
  host: 'localhost',
  database: 'my_database',
  password: 'password',
  port: 5432,
});

router.post('/user', async (req, res) => {
  const userData = req.body;

  try {
    const client = await pool.connect();
    const existingUserQuery = 'SELECT * FROM users WHERE email = $1';
    const existingUserValues = [userData.email];

    const existingUserResult = await client.query(existingUserQuery, existingUserValues);
    const existingUser = existingUserResult.rows[0];

    if (existingUser) {
      res.status(400).json({ message: 'User with the same email already exists' });
      return;
    }

    const insertUserQuery = 'INSERT INTO users (name, email) VALUES ($1, $2)';
    const insertUserValues = [userData.name, userData.email];

    await client.query(insertUserQuery, insertUserValues);

    const getUsersQuery = 'SELECT * FROM users';
    const getUsersResult = await client.query(getUsersQuery);
    const users = getUsersResult.rows;

    res.status(201).json({ message: 'User created successfully', users });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user' });
  }
});

module.exports = router;
