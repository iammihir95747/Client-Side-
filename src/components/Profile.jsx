import React, { useEffect, useState } from "react";
import "./Profile.css";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found");
          return;
        }

        const response = await fetch(`${BASE_URL}/profile`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // ✅ Send token
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch profile");
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="profile-card">
      <div className="profile-title">
        <h3>Profile</h3>
      </div>
      {user ? (
        <div className="profile-info">
          <div className="profiletxt">Username: {user.username}</div>
          <div className="profiletxt">Email: {user.email}</div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;
