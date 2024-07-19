const express = require('express');
const router = express.Router();
const SendOtp = require('./Forgetpassword');

router.post('/', async (req, res) => {
  const email = req.body.email;

  
  console.log('Received email for OTP:', email);


  module.exports.variable = email;

  try {
      // Sending OTP to the email
      await SendOtp(email);
      res.json({ message: 'OTP sent' });
  } catch (error) {
      console.error('Error sending OTP:', error);
      res.status(500).json({ message: 'Failed to send OTP' });
  }
});

module.exports = router;