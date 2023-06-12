// userController.js
const express = require('express');
const router = express.Router();
const executeQuery = require('../db/DBService')
const QUERIES = require('../db/Queries')
const UserService = require('../service/user.service')




router.post('/user', async (req, res) => {
  const userData = req.body;
  const query = QUERIES.SAVE_USER_QUERY;
  const values = [userData.name, userData.email];

  let isValid = UserService.isUserDateValid(userData);
  if (!isValid) {
    res.status(500).json({ message: 'user data is not valid' });
  }

  try {
    await executeQuery(query , values);
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user' });
  }
});

router.put('/user/:id', async (req, res) => {
  const userId = req.params.id;
  const updatedData = req.body;
  const query = 'UPDATE users SET name = $1, email = $2 WHERE id = $3';
  const values = [updatedData.name, updatedData.email, userId];

  try {
    await executeQuery(query, values);
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user' });
  }
});

module.exports = router;
