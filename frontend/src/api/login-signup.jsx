import api from './index';

export const signIn = (formData) => api.post('/user/signin', formData);
export const signUp = (formData) => api.post('/user/signup', formData);
