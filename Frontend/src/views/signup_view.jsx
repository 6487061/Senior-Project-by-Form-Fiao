import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/signup.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // จัดการข้อมูลสมัครสมาชิก
  };

  const handleSignInClick = () => {
    navigate('/'); // นำทางกลับไปหน้า Sign In
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        {/* Left Section */}
        <div className="signup-left">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="signup-input-field"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="signup-input-field"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="signup-input-field"
              value={formData.password}
              onChange={handleChange}
            />
            <button type="submit" className="signup-left-btn">Sign Up</button>
          </form>
        </div>
        {/* Right Section */}
        <div className="signup-right">
          <h2>Welcome Back!</h2>
          <p>To keep connected with us, please login with your personal info</p>
          <button className="signup-right-btn" onClick={handleSignInClick}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
