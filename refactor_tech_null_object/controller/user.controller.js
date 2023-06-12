
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
          return null; // Returning null when user is not found
        }
      })
      .catch((error) => {
        console.error('Error retrieving user:', error);
        return null;
      });
  }

  // Other methods...
}

module.exports = UserController;
