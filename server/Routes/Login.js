const express = require('express');
const Router = express.Router();
const CryptoJS = require("crypto-js");
const connection = require('./dbconnection');


Router.post('/',(req,res) => {
    const email =req.body.username;
    const  sanitizedpassword = req.body.password;
    
    // Check if the email and password exists in the database
    const query = `SELECT * FROM user_reg WHERE Lower(email) = ?`;
    connection.query(query,[email], (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
      }
      console.log('Query results:', results);
    if (results.length > 0) {
        //return res.status(400).json({ error: 'Email already has an account' });
      
        const hashedpassword = results[0].password;
        const salt = results[0].salt;
        const saltedpassword = salt +  sanitizedpassword; // Add the salt to the provided password
    const encryptedpassword = CryptoJS.SHA256(saltedpassword).toString(); // Hash the salted password
    const ispasswordMatch = encryptedpassword === hashedpassword;
        if (ispasswordMatch) {
          console.log('Login successful!');
          return res.status(200).json({ message: 'Successfully Logging In' });
        
    
        } else {
          console.log('Invalid email or password');
          return res.status(600).json({ error: 'Invalid email or password' });
          
        }
      }
      else{
        console.log('Invalid email or password');
        return res.status(400).json({ error: 'Invalid email or password' });
        
      }
    
    });
  
  });
  module.exports = Router;