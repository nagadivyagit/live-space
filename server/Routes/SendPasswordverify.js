const express = require('express');
const router = express.Router();
const SendPasswordOtp = require('./SendPasswordOtp');


router.post('/', async (req, res) => {
    const  email  = req.body.email;
    module.exports.variable = email;
    await SendPasswordOtp(email);
    res.json({ message: 'Verification email sent' });
  });

module.exports =router;