// UserController.js
const pg = require('pg');
const UserService = require('../service/user.service');
const User = require('../model/user');

class UserController {
  constructor() {
    this.client = new pg.Client();
    this.client.connect();
  }

  createUser(user) {
    // const { name, email, password, age, address ,zipcode } = user;
    const user = new User(name, email, password, age, address ,zipcode);
    // const query = `INSERT INTO users (name, email, password, age, address) VALUES ('${name}', '${email}', '${password}', ${age}, '${address}')`;
    // this.client.query(query, (err, result) => {
    //   if (err) {
    //     console.error('Error creating user:', err);
    //   } else {
    //     console.log('User created successfully');
    //   }
    // });

    UserService.createUser(user);

  }

  updateUser(user) {
    const { name, email, password, age, address, userId } = user;
    const query = `UPDATE users SET name = '${name}', email = '${email}', password = '${password}', age = ${age}, address = '${address}' WHERE id = ${userId}`;
    this.client.query(query, (err, result) => {
      if (err) {
        console.error('Error updating user:', err);
      } else {
        console.log('User updated successfully');
      }
    });
  }

}

module.exports = UserController;
