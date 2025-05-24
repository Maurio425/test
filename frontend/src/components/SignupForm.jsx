import React, { useState } from 'react';

function SignupForm({ onSignup }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSignup) {
      onSignup(username, email, password);
    } else {
      console.log('Signup attempt with:', username, email, password);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200 w-full max-w-md">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-gray-800">Create Account</h2>
      
      <div className="mb-5">
        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="username">
          Username
        </label>
        <input
          className="mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm transition-shadow duration-150"
          id="username"
          type="text"
          placeholder="Choose a username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      
      <div className="mb-5">
        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
          Email Address
        </label>
        <input
          className="mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm transition-shadow duration-150"
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      
      <div className="mb-6 sm:mb-8">
        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm transition-shadow duration-150"
          id="password"
          type="password"
          placeholder="•••••••• (at least 8 characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength="8" // Basic password length validation
        />
      </div>
      
      <div className="mt-8">
        <button
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow-md hover:shadow-lg transition-all duration-150 ease-in-out text-base"
          type="submit"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default SignupForm;
