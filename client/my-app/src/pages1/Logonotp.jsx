import React, { useState } from 'react';
import axios from 'axios';
import './OtpLogin.css';

const OtpLogin = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOtp = async () => {
    try {
      const response = await axios.post('http://localhost:5000/sendotpp', { email });
      if (response.status === 200) {
        alert('OTP sent successfully!');
        setOtpSent(true);
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      alert('Failed to send OTP.');
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await axios.post('http://localhost:5000/verifyotpp', { email, otp });
      if (response.status === 200) {
        alert('OTP verified successfully!');
      } else {
        alert('Failed to verify OTP.');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      alert('Failed to verify OTP.');
    }
  };

  return (
    <div className="full-height-containerph">
      <h2>Login with OTP</h2>
      {!otpSent ? (
        <div>
          <div className='P1'style={{ fontSize:'25px'}}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          </div>
          <button onClick={handleSendOtp}>Send OTP</button>
        </div>
      ) : (
        <div>
          <div className='P1'style={{ fontSize:'20px',}}>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter the OTP"
            required
          />
            </div>
          <button onClick={handleVerifyOtp}>Verify OTP</button>
        </div>
      )}
    </div>
  );
};

export default OtpLogin;
