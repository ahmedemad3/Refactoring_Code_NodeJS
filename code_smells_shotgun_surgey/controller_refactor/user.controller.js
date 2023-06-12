// UserController.js
const UserRepository = require('../repository/user.repository');

class UserController {
  constructor() {
    this.userRepository = new UserRepository();
  }

  createUser(user) {
    return this.userRepository.createUser(user)
      .then(() => {
        console.log('User created successfully');
      })
      .catch((err) => {
        console.error('Error creating user:', err);
      });
  }

  updateUser(user) {
    return this.userRepository.updateUser(user)
      .then(() => {
        console.log('User updated successfully');
      })
      .catch((err) => {
        console.error('Error updating user:', err);
      });
  }

  deleteUser(userId) {
    return this.userRepository.deleteUser(userId)
      .then(() => {
        console.log('User deleted successfully');
      })
      .catch((err) => {
        console.error('Error deleting user:', err);
      });
  }

  getUser(userId) {
    return this.userRepository.getUser(userId)
      .then((result) => {
        console.log('User:', result.rows[0]);
      })
      .catch((err) => {
        console.error('Error retrieving user:', err);
      });
  }
}

module.exports = UserController;
