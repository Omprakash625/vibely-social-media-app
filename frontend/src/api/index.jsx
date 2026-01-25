import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Separate instance for auth endpoints - use environment variable for deployment
const authApi = axios.create({
  baseURL: import.meta.env.VITE_AUTH_API_URL || import.meta.env.VITE_API_URL || 'http://localhost:5000',
});

// Request interceptor to attach token to every request
api.interceptors.request.use((config) => {
  try {
    const profileStr = localStorage.getItem('profile');
    const profile = profileStr ? JSON.parse(profileStr) : null;
    if (profile?.token) {
      config.headers.Authorization = `Bearer ${profile.token}`;
    }
  } catch (error) {
    console.error('Error parsing profile from localStorage:', error);
  }
  return config;
}, (error) => {
  console.error('Request interceptor error:', error);
  return Promise.reject(error);
});

// Response interceptor for better error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error('❌ 401 Unauthorized - token may be invalid or expired');
      console.error('Response:', error.response?.data);
      // Clear invalid token
      localStorage.removeItem('profile');
    }
    return Promise.reject(error);
  }
);

authApi.interceptors.request.use((config) => {
  try {
    const profileStr = localStorage.getItem('profile');
    const profile = profileStr ? JSON.parse(profileStr) : null;
    if (profile?.token) {
      config.headers.Authorization = `Bearer ${profile.token}`;
    } else {
      console.log('⚠ No token found in profile');
    }
  } catch (error) {
    console.error('Error parsing profile from localStorage:', error);
  }
  return config;
}, (error) => {
  console.error('Request interceptor error:', error);
  return Promise.reject(error);
});

export default api;
export { authApi };
