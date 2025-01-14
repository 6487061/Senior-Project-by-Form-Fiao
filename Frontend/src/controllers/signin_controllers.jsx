// controllers/SignInController.jsx
import React from 'react';
import { User } from '../models/User';
import SignIn from '../views/SignIn';

const SignInController = () => {
  const handleSignIn = (userData) => {
    const user = new User(userData.email, userData.password);
    const errors = User.validate(user);

    if (errors.length > 0) {
      alert(errors.join('\n'));
    } else {
      // Example: Sign in logic (could be API call)
      console.log('Sign in successful', user);
      alert('Sign in successful');
    }
  };

  return <SignIn onSignIn={handleSignIn} />;
};

export default SignInController;
