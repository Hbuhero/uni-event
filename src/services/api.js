import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_URL

const api = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        
    },
    
});

export default api;