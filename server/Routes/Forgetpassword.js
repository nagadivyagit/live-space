const express = require('express');
const Router = express.Router();
const nodemailer = require('nodemailer');
const crypto = require('crypto');

// In-memory store for OTPs
const otps = {};

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'devarapallinagadivya@gmail.com',
    pass:'sqsj xxfc mhzv nktx'
  }
});

// Route to send OTP
Router.post('/', (req, res) => {
  const { email } = req.body;
  const otp = crypto.randomInt(100000, 999999).toString().padStart(6, '0'); // Ensure OTP is 6 digits

  // Store OTP in memory

  otps[email] = otp;
  module.exports.variable = otps[email];


  const mailOptions = {
    from: 'devarapallinagadivya@gmail.com',
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending OTP:', error);
      return res.status(500).json({ message: 'Failed to send OTP' });
    }
    console.log('OTP sent:', info.response);
    res.json({ message: 'OTP sent successfully' });
  });
});

module.exports = Router;
















/*const express = require('express');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

// Email verification

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'navyasuryadevara99@gmail.com',
      pass: 'pdio arfb pbag xemg', // Ensure this is an App Password, not your regular email password
    },
});

const generateOtp = () => Math.floor(100000 + Math.random() * 900000);

let StoredOtp = null;

const SendPasswordOtp = async (Email) => {
    const secretKey = 'mySecretKey'; // Replace with your actual secret key

    const otp = generateOtp();

StoredOtp = otp; // Store OTP in memory, in a real app use a database
  console.log("your otp is " + StoredOtp);
  module.exports.variable = StoredOtp;
  console.log(otp);


    const mailOptions = {
      from: 'navyasuryadevara99@gmail.com',
      to: Email,
      subject: 'Verify your email address',
      html: <p>verify your email with Otp:${otp}</p>

    };

  
    await transporter.sendMail(mailOptions);
};

module.exports = SendPasswordOtp;
/*const express = require('express');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const connection = require('./dbconnection');


const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'devarapallinagadivya@gmail.com',
      pass: 'sqsj xxfc mhzv nktx',
    },
  });
  const ForgetPasswordEmail = async (email) => {
    const secretKey = 'mySecretKey'; // Replace with your actual secret key
    const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' });
    const ResetUrl = `http://localhost:5000/reset?token=${token}`;
     
    // save the token to the database
    const sql = `UPDATE user_reg SET Forget_token = ? WHERE email = ?`;
    connection.query(sql,[token, email], (err) => {
      if (err) {
        console.error('Error saving user data:', err);
        
      }
      console.log('User data saved successfully:');
    
  });
  
  
  
    const mailOptions = {
      from: 'devarapallinagadivya@gmail.com',
      to: email,
      subject: 'Reset the Password',
      html: `<p>Please click on the following link to reset the password:</p>
             <a href="${ResetUrl}">${ResetUrl}</a>`,
    };
  
    await transporter.sendMail(mailOptions);
  };

  module.exports = ForgetPasswordEmail;*/