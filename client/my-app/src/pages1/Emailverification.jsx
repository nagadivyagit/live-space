import React, { useState } from 'react';
 
import './Emailverificationcss.css';

const EmailOtp = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');

  const sendOTP = async () => {
    const response = await fetch('http://localhost:5000/sendotpp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    });
    const result = await response.json();
    setMessage(result.message);
  };

  const verifyOTP = async () => {
    const response = await fetch('http://localhost:5000/verifyotpp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, otp })
    });
    const result = await response.json();
    setMessage(result.message);
  };

  return (
    <div className='ContainerE'> 
      <h8>Email OTP Verification</h8>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label>email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <button type="button" onClick={sendOTP}>Send OTP</button>
        </div>
        <div>
          <label>OTP:</label>
          <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} required />
          <button type="button" onClick={verifyOTP}>Verify OTP</button>
        </div>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default EmailOtp;