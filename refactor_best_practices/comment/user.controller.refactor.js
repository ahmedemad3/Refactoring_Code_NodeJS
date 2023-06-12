const pg = require('pg');

/**
 * 
 */
class UserController {
  constructor() {
    this.client = new pg.Client();
    this.client.connect();
  }

  /**
   * Retrieves a user from the database based on the given ID.
   * @param {number} id - The ID of the user to retrieve.
   * @returns {Promise<Object|null>} A promise that resolves with the user object if found, or null if not found.
   */
  getUser(id) {
    const query = `SELECT * FROM users WHERE id = ${id}`;
    return this.client.query(query)
      .then((result) => {
        if (result.rows.length > 0) {
          return result.rows[0];
        } else {
          return null; // User not found
        }
      })
      .catch((error) => {
        console.error('Error retrieving user:', error);
        return null;
      });
  }

  /**
   * Creates a new user in the database.
   * @param {Object} user - The user object containing the name and email.
   * @returns {Promise<number>} A promise that resolves with the number of rows affected (1 if successful),
   * or -1 if an error occurred.
   */
  createUser(user) {
    const query = `INSERT INTO users (name, email) VALUES ('${user.name}', '${user.email}')`;
    return this.client.query(query)
      .then((result) => {
        return result.rowCount; // Number of rows affected (1 if successful)
      })
      .catch((error) => {
        console.error('Error creating user:', error);
        return -1; // Error occurred while creating user
      });
  }

  // Other methods...
}

module.exports = UserController;


/**
 * JSDOC https://www.npmjs.com/package/jsdoc
 */