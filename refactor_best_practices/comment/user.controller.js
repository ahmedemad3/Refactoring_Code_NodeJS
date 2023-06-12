const pg = require('pg');

class UserController {
  constructor() {
    this.client = new pg.Client();
    this.client.connect();
  }

  getUser(id) {
    const query = `SELECT * FROM users WHERE id = ${id}`;
    return this.client.query(query)
      .then((result) => {
        if (result.rows.length > 0) {
          return result.rows[0];
        } else {
          return null;
        }
      })
      .catch((error) => {
        console.error('Error retrieving user:', error);
        return null;
      });
  }

  /**
   * 
   * @param {*} user 
   * @returns 
   */
  createUser(user) {
    const query = `INSERT INTO users (name, email) VALUES ('${user.name}', '${user.email}')`;
    return this.client.query(query)
      .then((result) => {
        return result.rowCount;
      })
      .catch((error) => {
        console.error('Error creating user:', error);
        return -1;
      });
  }

  // Other methods...
}

module.exports = UserController;
