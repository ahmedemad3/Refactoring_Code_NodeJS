// UserController.js
const { Pool } = require('pg');

class UserController {
  constructor() {
    this.pool = new Pool({
      user: 'db_user',
      host: 'localhost',
      database: 'my_database',
      password: 'password',
      port: 5432,
    });
  }

  createUser(userData) {
    const client = this.pool.connect();
    const query = 'INSERT INTO users (name, email) VALUES ($1, $2)';
    const values = [userData.name, userData.email];

    return client.query(query, values)
      .then(() => {
        client.release();
      })
      .catch((error) => {
        client.release();
        throw error;
      });
  }

  getUserById(userId) {
    const client = this.pool.connect();
    const query = 'SELECT * FROM users WHERE id = $1';
    const values = [userId];

    return client.query(query, values)
      .then((result) => {
        client.release();
        return result.rows[0];
      })
      .catch((error) => {
        client.release();
        throw error;
      });
  }

  getAllUsers() {
    const client = this.pool.connect();
    const query = 'SELECT * FROM users';

    return client.query(query)
      .then((result) => {
        client.release();
        return result.rows;
      })
      .catch((error) => {
        client.release();
        throw error;
      });
  }
}

module.exports = UserController;
