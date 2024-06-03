{/*const express = require('express');
const router = express.Router();
var variables = require('./Emailgenotp');

router.post('/', (req, res) => {
    const {  otp } = req.body;
    const stored =variables.variable;
    console.log("otp sent is"+ stored);
    if (otp == stored) { // Verify OTP (convert to string if necessary)
      res.send('OTP verified successfully!');
    } else {
      res.status(400).send('Invalid OTP');
    }
  });*/}
const express = require('express');
const Router = express.Router();
var variables = require('./Emailgenotp');


Router.post('/', (req, res) => {
  const { email, otp } = req.body;
  console.log("Received OTP verification request for email:", email, "with OTP:", otp);
  const storedOtp = variables.variable;

  if (storedOtp == otp) {
  
    res.json({ message: 'OTP verified successfully' });
  } else {
    res.status(400).json({ message: 'Invalid OTP' });
  }
});

module.exports = Router;