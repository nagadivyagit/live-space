
const express = require('express');
const Router = express.Router();
var variables = require('./Forgetpassword');


Router.post('/', (req, res) => {
  const {  otp } = req.body;
  
  console.log( "with OTP:", otp);
  const storedOtp = variables.variable;

  if (storedOtp == otp) {
  
    res.json({ message: 'OTP verified successfully' });
  } else {
    res.status(400).json({ message: 'Invalid OTP' });
  }
});

module.exports = Router;