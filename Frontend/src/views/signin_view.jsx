// views/SignIn.jsx
import React, { useState } from 'react';
import '../css/signin.css';

const SignIn = () => {
  return (
    <div className="signin-page">
      <div className="signin-container">
        {/* Left Section */}
        <div className="signin-left">
          <h2>Sign In</h2>
          <form>
            <input type="email" placeholder="Email" className="input-field" />
            <input type="password" placeholder="Password" className="input-field" />
            <p className="forgot-password">Forgot Your Password?</p>
            <button type="submit" className="signin-btn">Sign In</button>
          </form>
        </div>
        {/* Right Section */}
        <div className="signin-right">
          <h2>Hello, Friend!</h2>
          <p>
            Register with your personal details to use all of site features
          </p>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
