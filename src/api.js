import axios from 'axios';

const API_URL = 'https://quantum-it-backend-ld4a.onrender.com/api/auth';  


const api = axios.create({
    baseURL: API_URL,
});

// API Endpoints
export const signup = (data) => api.post('/signup', data);
export const login = (data) => api.post('/login', data);
export const getUsers = (token) => api.get('/users', {
    headers: { Authorization: token }
});
