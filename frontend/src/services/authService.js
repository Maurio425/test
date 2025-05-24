// Placeholder for API base URL
// const API_URL = 'http://localhost:3000/api/auth'; // Example, will be configured later

export const login = async (email, password) => {
  console.log('authService.login called with:', email, password);
  // Simulate API call
  // const response = await fetch(`${API_URL}/login`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ email, password }),
  // });
  // if (!response.ok) {
  //   throw new Error('Login failed');
  // }
  // const data = await response.json();
  // return data;

  // For now, just return a dummy token after a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ token: 'dummy-jwt-token-for-' + email });
    }, 500);
  });
};

export const signup = async (username, email, password) => {
  console.log('authService.signup called with:', username, email, password);
  // Simulate API call
  // const response = await fetch(`${API_URL}/signup`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ username, email, password }),
  // });
  // if (!response.ok) {
  //   throw new Error('Signup failed');
  // }
  // const data = await response.json();
  // return data;

  // For now, just return a success message
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: 'Signup successful for ' + username });
    }, 500);
  });
};

export const storeToken = (token) => {
  console.log('authService.storeToken called with:', token);
  // localStorage.setItem('jwtToken', token); // Actual implementation later
};

export const getToken = () => {
  console.log('authService.getToken called');
  // return localStorage.getItem('jwtToken'); // Actual implementation later
  return null; // For now
};

export const removeToken = () => {
  console.log('authService.removeToken called');
  // localStorage.removeItem('jwtToken'); // Actual implementation later
};
