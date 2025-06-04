// client/src/api/user.js
import API from './axios';

export const getMyInfo = async () => {
    const response = await API.get('/users/me/');
    return response.data;
};

export const updateMyInfo = async (data) => {
    const response = await API.patch('/users/me/', data);
    return response.data;
};
