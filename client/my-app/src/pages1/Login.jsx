import React, { useState } from 'react';
import './Logincss.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from "../pages1/Navbar";

function Login() {
    const [username, setUsername] = useState(''); // State for storing the username
    const [password, setPassword] = useState(''); // State for storing the password
    const [loading, setLoading] = useState(false); // State for loading status
    const [error, setError] = useState(''); // State for error messages
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        setLoading(true); // Set loading state to true
        setError(''); // Clear any previous error messages

        try {
            const response = await axios.post('http://localhost:5000/Login', {
                username,
                password
            });

            if (response.status === 200) {
                // Handle successful login
                console.log('Login successful:', response.data);
                setTimeout(() => navigate('/Backpage'), 1000);
                // Redirect user or set authentication state
            } else {
                // Handle login failure
                setError('Login failed');
            }
        } catch (err) {
            console.error('Error during login:', err);
            setError('An error occurred. Please try again.'); // Set error message
        }

        setLoading(false); // Set loading state to false
    };

    return (
        <div>
            <div className='n'><Navbar/></div> 
            <div className="login-containerr">
                <form onSubmit={handleSubmit}>
                    <h2>Login Form</h2>
                    <div className="containerr">
                        <label htmlFor="uname"><b>Username</b></label>
                        <input
                            type="text"
                            placeholder="Enter Username"
                            name="uname"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <br />
                        <label htmlFor="psw"><b>Password</b></label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="psw"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit" disabled={loading}>
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                        {error && <div className="error">{error}</div>}
                    </div>
                    <div>
                        <span className="psw1">Not a user? <a href='./Signup'>Sign Up</a></span>
                    </div>
                    <div>
                        <span className="psw1">Forgot your password? <a href='./ForgetPassword'>Click here</a></span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
