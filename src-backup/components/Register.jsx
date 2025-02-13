import './Register.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from "axios";
import { toast, ToastContainer, Bounce } from 'react-toastify';

const BASE_URL = import.meta.env.VITE_BASE_URL;

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
            const response = await axios.post(`${BASE_URL}/register`, { username, email, password });
            toast.success(response.data.message);
            
            // Clear input fields after successful registration
            setUsername('');
            setEmail('');
            setPassword('');
        } catch (error) {
            toast.error(error.response?.data?.error || 'Error... ❌');
        }
    };

    return (
        <div className='form-container'>
            <div className="textform">
                <form method='POST' onSubmit={handleSubmit}>
                    <div className="formitems">
                        <h1>Signup</h1>
                        <input 
                            name="username" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            placeholder='Username' 
                        />
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
                                Already Have an account? <span><Link to="/login" className='Loginlog'>Login</Link></span>
                            </div>
                            <button type='submit' className='subbtn'>Sign Up</button>
                            <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} theme="dark" transition={Bounce} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
