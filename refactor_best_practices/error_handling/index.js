const express = require('express');
const app = express();

// Route to fetch user details from the database
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;

  // Query the database to fetch the user details
  const user = db.query('SELECT * FROM users WHERE id = ?', [userId]);

  // Send the user details as the response
  res.json(user);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
