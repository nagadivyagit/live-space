import React, { useState } from 'react';

import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ResetPassword.css';

function ResetPassword() {
    const [newPassword, setNewPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate(); 


    const handleResetPassword = async (e) => {
        e.preventDefault();

         // Check if passwords match
         if (newPassword !== ConfirmPassword) {
          window.alert('Passwords do not match.');
          return;
         }

        try {
            const response = await Axios.post('http://localhost:5000/reset-password', {newPassword});
            if (response.status === 200) {
                window.alert('Password reset successful.');
                navigate('/');
            }
        } catch (error) {
            console.error(error);
            window.alert('Failed to reset password.');
        }
    };

  return (
   

<div className='H'>
   <div className="container">
      <h1>Reset Password</h1>
      <form onSubmit={handleResetPassword}>
      <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="New Password" className="box" required/>
<input type="password" value={ConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}  placeholder="Confirm Password" className="box" required/>
<input type="submit" value="Submit" className="btn" />
</form>
      
    </div> 
  </div>

  )
};

export default ResetPassword;


/*import React, { useState } from 'react';
import './ResetPassword.css';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ResetPassword({ email, otp }) { // Receive email and OTP as props or from state
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleResetPassword = async (e) => {
        e.preventDefault();

        // Check if passwords match
        if (newPassword !== confirmPassword) {
            window.alert('Passwords do not match.');
            return;
        }

        try {
            const response = await Axios.post('http://localhost:5000/reset-password', { 
                email, // Include email
                otp,   // Include OTP
                newPassword 
            });
            if (response.status === 200) {
                window.alert('Password reset successful.');
                navigate('/');
            }
        } catch (error) {
            console.error(error);
            window.alert('Failed to reset password.');
        }
    };

    return (
        <div className='H'>
            <div className="container">
                <h1>Reset Password</h1>
                <form onSubmit={handleResetPassword}>
                    <input 
                        type="password" 
                        value={newPassword} 
                        onChange={(e) => setNewPassword(e.target.value)} 
                        placeholder="New Password" 
                        className="box" 
                        required 
                    />
                    <input 
                        type="password" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)}  
                        placeholder="Confirm Password" 
                        className="box" 
                        required 
                    />
                    <input type="submit" value="Submit" className="btn" />
                </form>
            </div> 
        </div>
    );
}

export default ResetPassword;



{/*import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const { token } = useParams();
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/reset-password', {
                token,
                newPassword
            });
            setSuccess(response.data.message);
            setTimeout(() => navigate('/'), 3000); // Redirect to login after 3 seconds
        } catch (err) {
            setError(err.response ? err.response.data.message : 'An error occurred');
        }
    };

    return (
        <div className="reset-password-container">
            <form onSubmit={handleSubmit}>
                <h2>Reset Password</h2>
                {error && <div className="error">{error}</div>}
                {success && <div className="success">{success}</div>}
                <div className="form-group">
                    <label htmlFor="newPassword">New Password</label>
                    <input
                        type="password"
                        id="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Reset Password</button>
            </form>
        </div>
    );
};

export default ResetPassword;*/
