// crudController.js
const express = require('express');
const router = express.Router();

class CrudController {
  // user or order or customer or product
  constructor(model , service) {
    this.model = model;
    this.service = service;
  }

  create(req, res) {
    const item = new this.model({
      // Process item creation data
      // ...
    });

    // calling service
    // ...
    res.status(200).json({ message: 'Item created successfully' });
  }

  read(req, res) {
    const itemId = req.params.id;

    // Fetch item from the database
    // ...
    res.status(200).json(item);
  }

  update(req, res) {
    const itemId = req.params.id;

    // Fetch item from the database
    // ...

    // Update item data
    // ...

    // Save updated item to the database
    // ...
    res.status(200).json({ message: 'Item updated successfully' });
  }

  delete(req, res) {
    const itemId = req.params.id;

    // Fetch item from the database
    // ...

    // Delete item from the database
    // ...
    res.status(200).json({ message: 'Item deleted successfully' });
  }
}

module.exports = CrudController;
