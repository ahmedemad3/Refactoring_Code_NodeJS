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

router.get('/user/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await userService.getUser(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user' });
  }
});

router.put('/user/:id', async (req, res) => {
  const userId = req.params.id;
  const updatedData = req.body;

  try {
    const updatedUser = await userService.updateUser(userId, updatedData);
    res.status(200).json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user' });
  }
});

router.delete('/user/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    await userService.deleteUser(userId);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user' });
  }
});

// List of users
router.get('/users/:filter', async (req, res) => {

  try {
    const user = await userService.getUsers();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving users' });
  }
});



module.exports = router;
