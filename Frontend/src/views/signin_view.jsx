import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/signin.css';

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup'); // นำทางไปยังหน้า Sign Up
  };

  return (
    <div className="signin-page">
      <div className="signin-container">
        {/* Left Section */}
        <div className="signin-left">
          <h2>Sign In</h2>
          <form>
            <input type="email" placeholder="Email" className="signin-input-field" />
            <input type="password" placeholder="Password" className="signin-input-field" />
            <p className="signin-forgot-password">Forgot Your Password?</p>
            <button type="submit" className="signin-left-btn">Sign In</button>
          </form>
        </div>
        {/* Right Section */}
        <div className="signin-right">
          <h2>Hello, Friend!</h2>
          <p>Register with your personal details to use all of site features</p>
          <button className="signup-right-btn" onClick={handleSignUpClick}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
