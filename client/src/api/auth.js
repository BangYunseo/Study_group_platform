import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api/users';

// 로그인
export const login = async (email, password) => {
    const response = await axios.post(`${BASE_URL}/login/`, {
        username: email,
        password,
    });
    return response.data;
};

// 회원가입
export const register = async (email, password, nickname) => {
    const response = await axios.post(`${BASE_URL}/register/`, {
        username: nickname,
        email,
        password,
        nickname,
    });
    return response.data;
};
