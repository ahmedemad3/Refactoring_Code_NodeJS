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
    const query = 'INSERT INTO users (name, email) VALUES ($1, $2)';
    const values = [userData.name, userData.email];

    // validate user data

    await client.query(query, values);
    client.release();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user' });
  }
});

router.put('/user/:id', async (req, res) => {
  const userId = req.params.id;
  const updatedData = req.body;

  
    // validate user data

  try {
    const client = await pool.connect();
    const query = 'UPDATE users SET name = $1, email = $2 WHERE id = $3';
    const values = [updatedData.name, updatedData.email, userId];

    await client.query(query, values);
    client.release();

    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user' });
  }
});

module.exports = router;
