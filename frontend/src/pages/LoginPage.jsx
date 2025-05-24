import React from 'react';
import LoginForm from '../components/LoginForm';
import { login, storeToken } from '../services/authService'; // Import login and storeToken
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    console.log('LoginPage: Attempting login with:', email, password);
    try {
      // Use the placeholder login service
      const data = await login(email, password); 
      console.log('LoginPage: Login successful placeholder', data);
      
      // Store the dummy token using placeholder storeToken
      storeToken(data.token); 
      
      // Navigate to the dashboard
      navigate('/dashboard'); 
    } catch (error) {
      console.error('LoginPage: Login failed placeholder', error);
      // Handle login error (e.g., show a message to the user)
      // For now, just logging the error
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md">
        <LoginForm onLogin={handleLogin} />
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          {/* Link component from react-router-dom is better for internal navigation */}
          <a href="/signup" className="font-medium text-blue-600 hover:text-blue-500">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
