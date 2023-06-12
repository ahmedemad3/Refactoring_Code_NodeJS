
const TaskService = require("../service/task.service")
const express = require('express');
const router = express.Router();

router.post('/tasks', (req, res) => {
    const { title, description } = req.body;
    
    const taskService = new TaskService();
    taskService.createTask(title, description, (error, task) => {
      if (error) {
        return res.status(400).json(error);
      }
      
      return res.status(201).json(task);
    });
  });