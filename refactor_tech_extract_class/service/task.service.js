const executeQuery = require('../db/DBService')

class TaskService {
    
    async createTask(title, description, callback) {
      // Validation
      if (!title || !description) {
        return callback({ error: 'Title and description are required' });
      }
      
      // Insert into the database
      const query = `INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *`;
      const values = [title, description];
      
      let result = await executeQuery(query , values)
      return result.rows[0];
    }
  }

  module.exports = TaskService;