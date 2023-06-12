// UserController.js
const pg = require('pg');

class UserController {
  constructor() {
    this.client = new pg.Client();
    this.client.connect();
  }

  createUser(user) {
    // Logic to create a user in the database
    const query = `INSERT INTO users (name, email, password) VALUES ('${user.name}', '${user.email}', '${user.password}')`;
    this.client.query(query, (err, result) => {
      if (err) {
        console.error('Error creating user:', err);
      } else {
        console.log('User created successfully');
      }
    });
  }

  updateUser(user) {
    // Logic to update a user in the database
    const query = `UPDATE users SET name = '${user.name}', email = '${user.email}', password = '${user.password}' WHERE id = ${user.id}`;
    this.client.query(query, (err, result) => {
      if (err) {
        console.error('Error updating user:', err);
      } else {
        console.log('User updated successfully');
      }
    });
  }

  deleteUser(userId) {
    // Logic to delete a user from the database
    const query = `DELETE FROM users WHERE id = ${userId}`;
    this.client.query(query, (err, result) => {
      if (err) {
        console.error('Error deleting user:', err);
      } else {
        console.log('User deleted successfully');
      }
    });
  }

  getUser(userId) {
    // Logic to retrieve a user from the database
    const query = `SELECT * FROM users WHERE id = ${userId}`;
    this.client.query(query, (err, result) => {
      if (err) {
        console.error('Error retrieving user:', err);
      } else {
        console.log('User:', result.rows[0]);
      }
    });
  }
}

module.exports = UserController;
