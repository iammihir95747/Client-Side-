import "./Register.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { toast, ToastContainer, Bounce } from "react-toastify";

const API_BASE = import.meta.env.VITE_BASE_URL;

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") setUsername(value);
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const validate = () => {
    const newErrors = {};
    if (!username) newErrors.username = "Username is required";
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    if (!password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
  
    try {
      const response = await fetch(`${API_BASE}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error || "Registration failed ❌");
      }
  
      toast.success("✅ Registration Successful!");
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Registration error:", error);
      toast.error(error.message || "Something went wrong ❌");
    }
  };
  

  return (
    <div className="form-container">
      <div className="textform">
        <form method="POST" onSubmit={handleSubmit}>
          <div className="formitems">
            <h1>Signup</h1>
            <input
              name="username"
              value={username}
              onChange={handleChange}
              placeholder="Username"
            />
            {errors.username && <span className="error">{errors.username}</span>}
            
            <input
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Email"
            />
            {errors.email && <span className="error">{errors.email}</span>}
            
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Password"
            />
            {errors.password && <span className="error">{errors.password}</span>}
            
            <div className="submitcontainer">
              <div className="ca">
                Already Have an account?{" "}
                <span>
                  <Link to="/login" className="Loginlog">
                    Login
                  </Link>
                </span>
              </div>
              <button type="submit" className="subbtn">
                Sign Up
              </button>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                theme="dark"
                transition={Bounce}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
