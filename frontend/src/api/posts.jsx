import api from './index';

export const fetchPosts = () => api.get('/posts');
export const createPost = (data) => api.post('/posts', data);
export const updatePost = (id, data) => api.patch(`/posts/${id}`, data);
export const deletePost = (id) => api.delete(`/posts/${id}`);
export const likePost = (id) => api.patch(`/posts/${id}/likePost`);