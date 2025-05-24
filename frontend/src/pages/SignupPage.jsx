import React, { useState } from 'react'; // Import useState
import SignupForm from '../components/SignupForm';
import { signup } from '../services/authService';
import { useNavigate, Link } from 'react-router-dom'; // Import Link

function SignupPage() {
  const navigate = useNavigate();
  const [message, setMessage] = useState(''); // State for messages from signup attempt

  const handleSignup = async (username, email, password) => {
    setMessage(''); // Clear previous messages
    console.log('SignupPage: Attempting signup with:', username, email, password);
    try {
      const result = await signup(username, email, password);
      console.log('SignupPage: Signup attempt result:', result);
      
      if (result.success) {
        // This path should ideally not be taken given the dummy signup implementation
        setMessage('Signup successful! Redirecting to login...');
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setMessage(result.message || 'Signup failed. Please try again later.');
      }
    } catch (error) {
      console.error('SignupPage: An unexpected error occurred during signup', error);
      setMessage('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md">
        <SignupForm onSignup={handleSignup} />
        {message && (
          <p className={`mt-4 text-center text-sm p-3 rounded-md ${
            message.includes('not available') || message.includes('failed') ? 'text-orange-700 bg-orange-100' : 'text-green-700 bg-green-100'
          }`}>
            {message}
          </p>
        )}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
            Log in
          </Link>
        </p>
         {/* Adding a note about dummy credentials for convenience, as signup is not functional */}
         <div className="mt-4 p-3 bg-yellow-100 border border-yellow-300 rounded-md text-sm text-yellow-700">
          <p className="font-semibold">Note:</p>
          <p>User registration is not implemented in this demo. Please use the provided dummy credentials on the login page.</p>
          <p className="mt-1">Email: <code>user@example.com</code> | Password: <code>password123</code></p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
