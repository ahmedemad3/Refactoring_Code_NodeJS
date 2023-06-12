const express = require('express');
const app = express();

const errorCodes = require('../error/error.code');
const errorMessages = require('../error/error.message');
const { CustomError } = require('../exception/custome.error');



// Route to fetch user details from the database
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  if(!userId){
    const errorCode = errorCodes.ID_REQUIRED;
    const errorMessage = errorMessages.ID_REQUIRED;
    res.status(errorCode).json({ error: errorMessage });
  }

  // Query the database to fetch the user details
  db.query('SELECT * FROM users WHERE id = ?', [userId], (error, user) => {
    if (error) {
      // Handle the database query error
      // const errorCode = errorCodes.FETCH_USER_ERROR;
      // const errorMessage = errorMessages.FETCH_USER_ERROR;

      const customError = new CustomError(errorCodes.FETCH_USER_ERROR, errorMessages.FETCH_USER_ERROR);
      res.status(customError.code).json({ error: customError.message });

      // res.status(errorCode).json({ error: errorMessage });
    } else {
      // Check if the user exists
      if (user.length === 0) {
        // Handle user not found error
        const errorCode = errorCodes.USER_NOT_FOUND_ERROR;
        const errorMessage = errorMessages.USER_NOT_FOUND_ERROR;

        // const customError = new CustomError(errorCode, errorMessage);
        // res.status(customError.code).json({ error: customError.message });
        
        res.status(errorCode).json({ error: errorMessage });
      } else {
        // Send the user details as the response
        res.json(user);
      }
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
