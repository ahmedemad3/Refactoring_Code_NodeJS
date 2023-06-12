// UserController.js
const UserRepository = require('../repository/user.repository');

class UserController {
  constructor() {
    this.userRepository = new UserRepository();
  }

  createUser(userData) {
    return this.userRepository.createUser(userData);
  }

  getUserById(userId) {
    return this.userRepository.getUserById(userId);
  }

  getAllUsers() {
    return this.userRepository.getAllUsers();
  }
}

module.exports = UserController;
