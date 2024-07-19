import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Verifyemailcss.css';

const VerifyForget = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Set a timer to navigate to another page after 3 seconds
    const timer = setTimeout(() => {
      navigate('/ResetPassword'); // Replace '/' with the path you want to navigate to
    }, 3000);

    // Clean up the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="full-height-containerv">
      <div className="containerv-fluid v1">
        <h1>Email verified successfully</h1>
        <p>Congratulations, your email has been verified.</p>
        <p>Redirecting you shortly...</p>
      </div>
    </div>
  );
};

export default VerifyForget;
