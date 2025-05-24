import React, { useState } from 'react'; // Import useState
import LoginForm from '../components/LoginForm';
import { login } from '../services/authService'; // Only login is needed here, storeToken is called by login
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; // For the "Sign up" link

function LoginPage() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages

  const handleLogin = async (email, password) => {
    setErrorMessage(''); // Clear previous error messages
    console.log('LoginPage: Attempting login with:', email, password);
    
    try {
      const result = await login(email, password); // Call the updated login service
      
      if (result.success) {
        console.log('LoginPage: Login successful', result.user);
        navigate('/dashboard'); // Navigate to the dashboard on success
      } else {
        console.log('LoginPage: Login failed', result.message);
        setErrorMessage(result.message || 'Login failed. Please check your credentials.');
      }
    } catch (error) {
      // This catch block might be redundant if authService.login always resolves
      // but it's good practice for unexpected errors.
      console.error('LoginPage: An unexpected error occurred during login', error);
      setErrorMessage('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md">
        <LoginForm onLogin={handleLogin} />
        {errorMessage && (
          <p className="mt-4 text-center text-sm text-red-600 bg-red-100 p-3 rounded-md">
            {errorMessage}
          </p>
        )}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">
            Sign up
          </Link>
        </p>
        {/* Adding a note about dummy credentials for convenience */}
        <div className="mt-4 p-3 bg-blue-100 border border-blue-300 rounded-md text-sm text-blue-700 text-center">
          <p className="font-semibold">Demo Credentials:</p>
          <p>Email: <code>user@example.com</code></p>
          <p>Password: <code>password123</code></p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
