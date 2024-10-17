// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/auth'; // Update with your API base URL

export const registerUser = async (username, password) => {
    return await axios.post(`${API_URL}/register`, { username, password });
};

export const setupMFA = async (username) => {
    return await axios.post(`${API_URL}/setupMFA`, { username });
};

export const verifyMFA = async (username, totp) => {
    return await axios.post(`${API_URL}/verifyMFA`, { username, totp });
};

export const loginUser = async (username, password) => {
    return await axios.post(`${API_URL}/login`, { username, password });
};
