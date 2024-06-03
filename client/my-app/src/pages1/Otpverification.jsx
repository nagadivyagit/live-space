import React, { useState } from 'react';
import axios from 'axios';
import './Otpcss.css'; // Import the CSS file

const OtpForm = () => {
  const [otp, setOtp] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/verify-otp', {
        otp
      });
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
    <div className="background-wrapper">
    <div className="otp-containero">
      <div className="otp-headero">
        <h2>Enter OTP Code</h2>
      </div>
      <form onSubmit={handleSubmit} className="otp-formo">
        <div className="otp-inputo">
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            placeholder="Enter the OTP"
            className="otp-inputo"
          />
        </div>
        <button type="submit" className="otp-buttono">Verify OTP</button>
      </form>
    </div>
    </div>
  );
};

export default OtpForm;
