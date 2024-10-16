import React from 'react';
import axios from 'axios';

function Login({ setUser }) {
  const handleLogin = async () => {
    try {
      const response = await axios.get('https://100.20.92.101/login');
      const { user } = response.data;
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
      window.location.href = '/chat';
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Login with Google</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
