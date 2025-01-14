// controllers/SignUpController.jsx
import React, { useState } from 'react';
import { User } from '../models/User';
import SignUp from '../views/SignUp';

const SignUpController = () => {
  const [errors, setErrors] = useState([]);

  const handleSignUp = (formData) => {
    const newUser = new User(formData.name, formData.email, formData.password);
    const validationErrors = User.validate(newUser);

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors([]);
      // Add logic to handle sign-up, e.g., sending data to an API
      console.log("User successfully signed up:", newUser);
      alert("Sign up successful!");
    }
  };

  return <SignUp onSignUp={handleSignUp} errors={errors} />;
};

export default SignUpController;
