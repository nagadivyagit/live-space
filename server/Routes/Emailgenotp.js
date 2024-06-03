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


{/*// Email verification

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'devarapallinagadivya@gmail.com',
      pass: 'sqsj xxfc mhzv nktx', // Ensure this is an App Password, not your regular email password
    },
});

const generateOtp = () => Math.floor(100000 + Math.random() * 900000);

const Emailgenotp = async (email) => {
    const secretKey = 'mySecretKey'; // Replace with your actual secret key

const otp = generateOtp();

console.log(otp);



const mailOptions = {
  from: 'devarapallinagadivya@gmail.com',
  to: email,
  subject: 'Verify your email address',
  html: `<p>verify your email with Otp:${otp}</p>`

};
  
await transporter.sendMail(mailOptions);
};

module.exports = Emailgenotp; */}