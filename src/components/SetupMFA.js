// src/components/SetupMFA.js
import React, { useState } from 'react';
import { setupMFA } from '../api';

const SetupMFA = () => {
    const [username, setUsername] = useState('');
    const [qrCodeUrl, setQrCodeUrl] = useState('');
    const [message, setMessage] = useState('');

    const handleSetupMFA = async () => {
        try {
            const result = await setupMFA(username);
            setQrCodeUrl(result.data.qrCodeUrl); // Set the QR code URL from the response
            setMessage("MFA setup successful!");
        } catch (error) {
            setMessage("Failed to set up MFA.");
            setQrCodeUrl(''); // Reset QR code URL on error
        }
    };

    return (
        <div>
            <h1>Setup MFA</h1>
            <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            /><br/>
            <button onClick={handleSetupMFA}>Setup MFA</button>
            {message && <p>{message}</p>}
            {qrCodeUrl && (
                <div>
                    <h2>Scan this QR Code:</h2>
                    <img src={qrCodeUrl} alt="QR Code for MFA" />
                </div>
            )}
        </div>
    );
};

export default SetupMFA;
