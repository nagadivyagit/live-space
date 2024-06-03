const express = require('express');
const router = express.Router();
const SendEmailOtp = require('./Emailgenotp');


router.post('/', async (req, res) => {
    const  email  = req.body.email;
    await SendEmailOtp(email);
    res.json({ message: 'Verification email sent' });
  });
 


  
  module.exports = router;