// src/components/VerifyMFA.js
import React, { useState } from 'react';
import { verifyMFA } from '../api';

const VerifyMFA = () => {
    const [username, setUsername] = useState('');
    const [code, setCode] = useState('');
    const [message, setMessage] = useState('');

    const handleVerifyMFA = async () => {
        try {
            await verifyMFA(username, code);
            setMessage('MFA verification successful!');
        } catch (error) {
            setMessage('Invalid MFA code.');
        }
    };

    return (
        <div>
            <h2>Verify MFA</h2>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} /><br/>
            <input type="text" placeholder="MFA Code" onChange={(e) => setCode(e.target.value)} /><br/>
            <button onClick={handleVerifyMFA}>Verify MFA</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default VerifyMFA;
