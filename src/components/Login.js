// src/components/Login.js
import React, { useState } from 'react';
import { loginUser } from '../api';

const Login = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async () => {
        try {
            const response = await loginUser(username, password);
            onLoginSuccess(response.data);
        } catch (error) {
            setMessage('Invalid username or password.');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} /><br/>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br/>
            <button onClick={handleLogin}>Login</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Login;
