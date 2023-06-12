// userController.js
const express = require('express');
const router = express.Router();
const User = require('../model/user');
const CrudController = require('./crud.controller');

// IMPORT user service

// adding user service in constructoer
const userController = new CrudController(User);

router.post('/user', userController.create);
router.get('/user/:id', userController.read);
router.put('/user/:id', userController.update);
router.delete('/user/:id', userController.delete);

module.exports = router;