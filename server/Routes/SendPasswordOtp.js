const express = require('express');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

// Email verification

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'devarapallinagadivya@gmail.com',
    pass:'sqsj xxfc mhzv nktx'
  }
});

const generateOtp = () => Math.floor(100000 + Math.random() * 900000);

let StoredOtp = null;

const SendPasswordOtp = async (email) => {
    const secretKey = 'mySecretKey'; // Replace with your actual secret key

    const otp = generateOtp();

StoredOtp = otp; // Store OTP in memory, in a real app use a database
  console.log("your otp is " + StoredOtp);
  module.exports.variable = StoredOtp;
  console.log(otp);


  const mailOptions = {
    from: 'devarapallinagadivya@gmail.com',
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}`
  };
  
    await transporter.sendMail(mailOptions);
};

module.exports = SendPasswordOtp;