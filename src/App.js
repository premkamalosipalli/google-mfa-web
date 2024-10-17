// src/App.js
import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import SetupMFA from './components/SetupMFA';
import VerifyMFA from './components/VerifyMFA';
import './App.css';

const App = () => {
  const [token, setToken] = useState('');

  const handleLoginSuccess = (data) => {
    setToken(data.token);
    alert('Login successful!');
  };

  return (
      <div className="app-container">
        <h1>Authentication with MFA</h1>
        {!token ? (
            <>
              <Register />
              <Login onLoginSuccess={handleLoginSuccess} />
              <SetupMFA />
              <VerifyMFA />
            </>
        ) : (
            <h2>Welcome! You are logged in.</h2>
        )}
      </div>
  );
};

export default App;
