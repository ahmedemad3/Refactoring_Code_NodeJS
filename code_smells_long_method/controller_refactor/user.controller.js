// userController.js
const express = require('express');
const router = express.Router();
const UserService = require('../service/user.service')


router.post('/user', async (req, res) => {
  const userData = req.body;
  try {
    let existingUser = UserService.checkExistingUser();
    if (existingUser) {
      res.status(400).json({ message: 'User with the same email already exists' });
      return;
    }
    UserService.createUser(userData);
    res.status(201).json({ message: 'User created successfully', users });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user' });
  }
});

module.exports = router;
