const express = require('express');
const Router = express.Router();
const CryptoJS = require("crypto-js");
const connection = require('./dbconnection');

Router.post('/', (req, res) => {
    const email = req.body.username;
    const password = req.body.password;

    // Check if the email exists in the database and is verified
    const query = `SELECT * FROM user_reg WHERE LOWER(email) = ?`;
    connection.query(query, [email.toLowerCase()], (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }

        if (results.length > 0) {
            const user = results[0];

            // Check if the email is verified
            if (!user.is_verified) {
                return res.status(403).json({ error: 'Email not verified' });
            }

            const hashedPassword = user.password;
            const salt = user.salt;
            const saltedPassword = salt + password;
            const encryptedPassword = CryptoJS.SHA256(saltedPassword).toString();

            if (encryptedPassword === hashedPassword) {
                console.log('Login successful!');
                return res.status(200).json({ message: 'Successfully logged in' });
            } else {
                console.log('Invalid email or password');
                return res.status(401).json({ error: 'Invalid email or password' });
            }
        } else {
            console.log('Invalid email or password');
            return res.status(401).json({ error: 'Invalid email or password' });
        }
    });
});

module.exports = Router;
