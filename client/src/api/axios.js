// client/src/api/axios.js
import axios from 'axios';

const API = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
});

// 요청 전에 accessToken이 있다면 헤더에 자동 추가
API.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default API;
