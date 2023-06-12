// UserController.js
const pg = require('pg');
const UserService = require('../service/user.service');

class UserController {
  constructor() {
    this.client = new pg.Client();
    this.client.connect();
  }

  createUser(name, email, password, age, address , zipCode) {
    // Logic to create a user in the database
    const query = `INSERT INTO users (name, email, password, age, address) VALUES ('${name}', '${email}', '${password}', ${age}, '${address}')`;
    // this.client.query(query, (err, result) => {
    //   if (err) {
    //     console.error('Error creating user:', err);
    //   } else {
    //     console.log('User created successfully');
    //   }
    // });

    UserService.createUser(name, email, password, age, address , zipCode)
  }

  updateUser(name, email, password, age, address, userId) {
    // Logic to update a user in the database
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
