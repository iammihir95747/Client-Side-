import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { toast, ToastContainer, Bounce } from "react-toastify";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("❌ Email and Password are required");
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }), // ✅ Correct data format
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Login Failed ❌");
      }

      toast.success("✅ Login Successful");
      localStorage.setItem("token", data.token); // ✅ Correct way to store token
      navigate("/profile");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="form-container">
      <div className="textform">
        <form onSubmit={handleLogin}>
          <div className="formitems">
            <h1>Login</h1>
            <input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <div className="submitcontainer">
              <div className="ca">
                <span>
                  <Link to="/forgotPassword" className="forgot-password">
                    Forgot Password?
                  </Link>
                </span>
              </div>
              <div className="ca">
                Don't have an account?{" "}
                <span>
                  <Link to="/register" className="Loginlog">
                    Sign Up
                  </Link>
                </span>
              </div>
              <button type="submit" className="subbtn">
                Login
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

export default Login;
