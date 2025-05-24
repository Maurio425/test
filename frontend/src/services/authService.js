// Placeholder for API base URL
// const API_URL = 'http://localhost:3000/api/auth'; // Example, will be configured later

const DUMMY_JWT_TOKEN_KEY = 'dummyJwtToken';

const dummyUser = {
  email: 'user@example.com',
  password: 'password123',
  name: 'Demo User',
  // You can add other user details here if needed
};

export const login = async (email, password) => {
  console.log('authService.login called with:', email, password);

  return new Promise((resolve, reject) => {
    setTimeout(() => { // Simulate network delay
      if (email === dummyUser.email && password === dummyUser.password) {
        const token = 'fake-dummy-jwt-for-' + dummyUser.email;
        storeToken(token);
        resolve({ 
          success: true, 
          user: { name: dummyUser.name, email: dummyUser.email } 
        });
      } else {
        // Resolve with success: false instead of reject, so LoginPage can handle the message.
        resolve({ success: false, message: 'Invalid email or password.' });
      }
    }, 500);
  });
};

export const signup = async (username, email, password) => {
  console.log('authService.signup called with:', username, email, password);
  // For now, signup is not functional and will just return a generic message.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: false, message: 'Signup is not available in this demo. Please use the dummy credentials.' });
    }, 500);
  });
};

export const storeToken = (token) => {
  console.log('authService.storeToken called with:', token);
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(DUMMY_JWT_TOKEN_KEY, token);
  } else {
    console.warn('localStorage is not available. Token not stored.');
  }
};

export const getToken = () => {
  console.log('authService.getToken called');
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem(DUMMY_JWT_TOKEN_KEY);
  }
  console.warn('localStorage is not available. Cannot retrieve token.');
  return null;
};

export const removeToken = () => {
  console.log('authService.removeToken called');
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem(DUMMY_JWT_TOKEN_KEY);
  } else {
    console.warn('localStorage is not available. Token not removed.');
  }
};

// Optional: Function to get current user details if token exists
// This is not strictly part of the JWT mechanism but useful for UI
export const getCurrentUser = () => {
  const token = getToken();
  if (token && token.startsWith('fake-dummy-jwt-for-')) { // Basic check for our dummy token
    // In a real app, you'd decode the JWT here or fetch user profile
    // For the dummy setup, if a token exists, we assume it's for dummyUser
    return { name: dummyUser.name, email: dummyUser.email };
  }
  return null;
};
