const pg = require('pg');
const UtilService = require('../service/util.service')
const express = require('express');
const router = express.Router();

// Database connection
const pool = new pg.Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'your_database',
  password: 'your_password',
  port: 5432,
});

// Create a task (without refactoring)
router.post('/tasks', (req, res) => {
  try {
    const { title, description } = req.body;
    
    // Validation
    if (!title || !description) {
      return res.status(400).json({ error: 'Title and description are required' });
    }
  
    if(UtilService.isEmpty(title)){
      return res.status(400).json({ error: 'Title and description are required' });
    }
    
    // Insert into the database
    const query = `INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *`;
    const values = [title, description];
    
    pool.query(query, values, (error, result) => {
      if (error) {
        console.error('Error creating task:', error);
        return res.status(500).json({ error: 'Failed to create task' });
      }
      
      const task = result.rows[0];
      return res.status(201).json(task);
    });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to create task' });
  }
  
});