// src/auth.js
export const isAuthenticated = () => {
      // Simulate an authentication check
      return localStorage.getItem('auth') === 'true';
    };
    
    export const login = () => {
      localStorage.setItem('auth', 'true');
    };
    
    export const logout = () => {
      localStorage.removeItem('auth');
    };
    