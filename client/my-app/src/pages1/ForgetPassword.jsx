import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Forgetemail.css';


const ForgetPassword= () => {
    const navigate = useNavigate();
  const [email, setemail] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/ForgetPassword', {
        email
      });
      if (response.status === 200) {

        alert('OTP sent successfully');
        navigate('/Forgetotp');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      alert('Failed to send OTP. Please check your Email.');
    }
  };


return(
<div className="M">
  <div className="P">
  <form id="phoneForm" onSubmit={handleSubmit}>
    <div className="P1">
     
      <input type="email" id="email" name="Email" value={email} placeholder='Enter Your Email' onChange={(e) => setemail(e.target.value)} required/>
    </div>
    <button type="submit">Submit</button>
  </form>
</div>
</div>
  );
}

export default ForgetPassword;


/*import React, { useState } from 'react';
import axios from 'axios';
import './Logincss.css';
import { useNavigate } from 'react-router-dom';

function ForgetPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();

    const sendOTP = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/ForgetPassword', { email });
            if (response.status === 200) {
                setMessage('OTP sent successfully. Please check your email.');
            }
        } catch (err) {
            setMessage('Failed to send OTP. Please try again.');
        }
    };

    const verifyOTP = async () => {
        try {
            const response = await axios.post('http://localhost:5000/verifypassword', { email, otp });
            if (response.status === 200) {
                setMessage('OTP verified successfully. Redirecting to reset page...');
                
                // Delay the navigation to show the success message
                setTimeout(() => {
                    navigate('/resetpassword');
                }, 2000); // 2-second delay before navigation
            } else {
                setMessage('Invalid OTP. Please try again.');
            }
        } catch (err) {
            setMessage('Error verifying OTP. Please try again.');
        }
    };

    return (
        <div className='ContainerE'>
            <h2>Email OTP Verification</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="button" onClick={sendOTP}>Send OTP</button>
                </div>
                <div>
                    <label>OTP:</label>
                    <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        required
                    />
                    <button type="button" onClick={verifyOTP}>Verify OTP</button>
                </div>
            </form>
            <p>{message}</p>
        </div>
    );
}

export default ForgetPassword;

    
    
    
    
    
    
    
    
    
    
    
    
        
    
    /*return (
        <div>
            <div className='n'><Navbar/></div>
            <div className="login-containerr">
                <form onSubmit={handleSubmit}>
                    <h2>Forgot Password</h2>
                    <div className="containerr">
                        <label htmlFor="email"><b>Email</b></label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Submit'}
                        </button>
                        {message && <div className="message">{message}</div>}
                        {error && <div className="error">{error}</div>}
                    </div>
              
           
            <label>OTP:</label>
          <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} required />
          <button type="button" onClick={verifyOTP}>Verify OTP</button>
     
      </form>
      </div>
        </div>
    );
}

export default ForgetPassword;*/
