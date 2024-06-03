const express = require('express');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const connection = require('./dbconnection');

//database connection




//email verification

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'devarapallinagadivya@gmail.com',
      pass: 'sqsj xxfc mhzv nktx',
    },
  });
  const sendVerificationEmail = async (email) => {
    const secretKey = 'mySecretKey'; // Replace with your actual secret key
    const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' });
    const verificationUrl = `http://localhost:5000/verify?token=${token}`;
     
    // save the token to the database
    const sql = `UPDATE user_reg SET verification_token = ? WHERE email = ?`;
    connection.query(sql,[token, email], (err) => {
      if (err) {
        console.error('Error saving user data:', err);
        
      }
      console.log('User data saved successfully:');
    
  });
  
  
  
    const mailOptions = {
      from: 'devarapallinagadivya@gmail.com',
      to: email,
      subject: 'Verify your email address',
      html: `<p>Please click on the following link to verify your email address:</p>
             <a href="${verificationUrl}">${verificationUrl}</a>`,
    };
  
    await transporter.sendMail(mailOptions);
  };

  module.exports = sendVerificationEmail;