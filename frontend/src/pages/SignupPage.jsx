import React from 'react';
import SignupForm from '../components/SignupForm';
import { signup } from '../services/authService'; // Import signup
import { useNavigate } from 'react-router-dom';

function SignupPage() {
  const navigate = useNavigate();

  const handleSignup = async (username, email, password) => {
    console.log('SignupPage: Attempting signup with:', username, email, password);
    try {
      // Use the placeholder signup service
      const data = await signup(username, email, password);
      console.log('SignupPage: Signup successful placeholder', data);
      
      // Navigate to the login page after successful signup
      navigate('/login'); 
    } catch (error) {
      console.error('SignupPage: Signup failed placeholder', error);
      // Handle signup error (e.g., show a message to the user)
      // For now, just logging the error
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md">
        <SignupForm onSignup={handleSignup} />
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          {/* Link component from react-router-dom is better for internal navigation */}
          <a href="/login" className="font-medium text-blue-600 hover:text-blue-500">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
