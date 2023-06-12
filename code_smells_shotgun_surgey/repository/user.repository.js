// UserRepository.js
const pg = require('pg');
const Queries = require("./queries");

class UserRepository {
  constructor() {
    this.client = new pg.Client();
    this.client.connect();
  }

  async createUser(user) {
    // Logic to create a user in the database
    const query = `INSERT INTO users (name, email, password) VALUES ('${user.name}', '${user.email}', '${user.password}')`;
    return this.client.query(query);
  }

  updateUser(user) {
    // Logic to update a user in the database
    const query = `UPDATE users SET name = '${user.name}', email = '${user.email}', password = '${user.password}' WHERE id = ${user.id}`;
    return this.client.query(query);
  }

  deleteUser(userId) {
    // Logic to delete a user from the database
    const query = Queries.DELETE_USER_QUERY;
    return this.client.query(query , [userId]);
  }

  getUser(userId) {
    // Logic to retrieve a user from the database
    // const query = `SELECT * FROM users WHERE id = ${userId}`;
    const query = Queries.GET_USER_QUERY;
    return this.client.query(query , [userId]);
  }
}

module.exports = UserRepository;
