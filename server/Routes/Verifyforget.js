const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const connection = require('./dbconnection');



router.get('/', async (req, res) => {
    const token = req.query.token;
    try {
      const decodedToken = jwt.verify(token, 'mySecretKey');
      const email = decodedToken.email;
      
      // update the is_verified field in the database
      const sql = `UPDATE user_reg SET is_reset = true WHERE email = ?`;
      connection.query(sql, [email], (err, result) => {
        if (err) {
          console.error('Error updating user data:', err);
          return res.send({ error: 'Error updating user data' });
        }
        console.log('User data updated successfully:', result);
        res.redirect('http://localhost:3000/verifyforget');
        
      });
    } catch (err) {
      console.error('Error verifying email:', err);
      return res.send({ error: 'Error verifying email' });
    }
    
  });


  module.exports = router;