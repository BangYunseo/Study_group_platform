import API from './axios';

export const getAllPosts = async () => {
    const response = await API.get('/posts/posts/');
    return response.data;
};

export const createPost = async (data) => {
    const response = await API.post('/posts/posts/', data);
    return response.data;
};

export const getPostById = async (id) => {
    const response = await API.get(`/posts/posts/${id}/`);
    return response.data;
};
