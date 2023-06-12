// userService.js
const db = require('../database'); // Assume you have a database connection module
const bcrypt = require('bcrypt');
const UserRepository = require('../repository/user.repository');
const UtilService = require('./util.service')

class UserService {
    
  async createUser(userData) {
    const { name, email, password } = userData;

    // Validate input data
    if (!name || !email || !password) {
      throw new Error('Missing required fields');
    }

    // Check if the email is already registered
    // const existingUser = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    // if (existingUser.rows.length > 0) {
    //   throw new Error('Email already registered');
    // }

    UserRepository.isEmailExists(email);

    // Hash the password
    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password, salt);

    const hashedPassword = UtilService.hashPassword(password);

    // Create a new user
    // const newUser = await db.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *', [name, email, hashedPassword]);
    
    UserRepository.createUser(user);
    return newUser.rows[0];
  }
}

module.exports = UserService;
