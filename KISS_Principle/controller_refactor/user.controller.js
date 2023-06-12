// userController.js
const express = require('express');
const router = express.Router();
const UserService = require('../service/user.service');

const userService = new UserService();

router.post('/user', async (req, res) => {
  const userData = req.body;

  try {
    const newUser = await userService.createUser(userData);
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user' });
  }
});

module.exports = router;
