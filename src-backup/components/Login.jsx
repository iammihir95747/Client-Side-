import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from "axios";
import { toast, ToastContainer, Bounce } from 'react-toastify';

const BASE_URL = import.meta.env.VITE_BASE_URL;

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${BASE_URL}/login`, { email, password });
            toast.success("Login Successful ✅");
            localStorage.setItem('token', response.data.token); // Store token
            navigate('/profile'); // Redirect to profile
        } catch (error) {
            toast.error(error.response?.data?.error || "Login Failed ❌");
        }
    };

    return (
        <div className='form-container'>
            <div className="textform">
                <form method='POST' onSubmit={handleLogin}>
                    <div className="formitems">
                        <h1>Login</h1>
                        <input 
                            name="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder='Email' 
                        />
                        <input 
                            type="password" 
                            name="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder='Password' 
                        />
                        <div className="submitcontainer">
                            <div className="ca">
                                <span><Link to="/forgotPassword" className='forgot-password'>Forgot Password?</Link></span>
                            </div>
                            <div className="ca">
                                Don't have an account? <span><Link to="/register" className='Loginlog'>Sign Up</Link></span>
                            </div>
                            <button type='submit' className='subbtn'>Login</button>
                            <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} theme="dark" transition={Bounce} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
