import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css'

const BASE_URL = import.meta.env.VITE_BASE_URL;

function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await fetch("https://server-node-eef9.onrender.com/profile", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(userData),
                  });
                setUser(response.data);
            } catch (error) {
                console.error("Error fetching profile:", error);
            }
        };

        fetchProfile();
    }, []);

    return (
        <div className='profile-card'>
           <div className="profile-title"><h3>Profile</h3></div>
            {user ? (
                <div className='profile-info'>
                    <div className='profiletxt'>Username: {user.username}</div>
                    <div className='profiletxt'>Email: {user.email}</div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Profile;
