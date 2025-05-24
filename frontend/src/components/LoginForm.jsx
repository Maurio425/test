import React, { useState } from 'react';

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onLogin) {
      onLogin(email, password);
    } else {
      console.log('Login attempt with:', email, password);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-neutral-300 w-full max-w-md">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-neutral-800">Login</h2>
      
      <div className="mb-5"> {/* Increased margin bottom for spacing */}
        <label className="block text-neutral-700 text-sm font-semibold mb-2" htmlFor="email">
          Email Address
        </label>
        <input
          className="mt-1 block w-full px-4 py-2.5 border border-neutral-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition-shadow duration-150 text-neutral-900"
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      
      <div className="mb-6 sm:mb-8"> {/* Increased margin bottom */}
        <label className="block text-neutral-700 text-sm font-semibold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="mt-1 block w-full px-4 py-2.5 border border-neutral-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition-shadow duration-150 text-neutral-900"
          id="password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {/* Optional: Add a "Forgot password?" link here */}
        {/* <div className="text-right mt-2">
          <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
            Forgot password?
          </a>
        </div> */}
      </div>
      
      <div className="mt-8"> {/* Increased top margin for the button */}
        <button
          className="w-full bg-primary hover:bg-secondary text-white font-semibold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-md hover:shadow-lg transition-all duration-150 ease-in-out text-base"
          type="submit"
        >
          Sign In
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
