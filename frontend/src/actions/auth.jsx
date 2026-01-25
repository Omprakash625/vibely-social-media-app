import { createAsyncThunk } from '@reduxjs/toolkit'
import * as api from '../api/auth'
import { signIn, signUp } from '../api/login-signup'

export const googleLogin = createAsyncThunk(
  'auth/googleLogin',
  async (credential, { rejectWithValue }) => {
    try {
      const response = await api.googleLogin(credential);
      const { data } = response;
      
      // Ensure token exists
      const token = data.token;
      const user = data.user;
      
      if (!token) {
        console.error('⚠️ WARNING: No token received from server!');
        return rejectWithValue('No authentication token received from server');
      }
      
      // Save user to localStorage
      const profileData = { 
        result: user,
        token: token 
      };
      localStorage.setItem('profile', JSON.stringify(profileData));
      return user;
    } catch (error) {
      console.error('Google login error:', error);
      console.error('Error response:', error.response?.data);
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
)

export const signin = createAsyncThunk(
  'auth/signin',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await signIn(formData);
      const { data } = response;
      
      // Ensure token exists
      const token = data.token;
      const user = data.result;
      
      if (!token) {
        console.error('⚠️ WARNING: No token received from server!');
        return rejectWithValue('No authentication token received from server');
      }
      
      // Save user to localStorage
      const profileData = { 
        result: user,
        token: token 
      };
      localStorage.setItem('profile', JSON.stringify(profileData));
      return user;
    } catch (error) {
      console.error('Sign in error:', error);
      console.error('Error response:', error.response?.data);
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
)

export const signup = createAsyncThunk(
  'auth/signup',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await signUp(formData);
      const { data } = response;
      
      // Ensure token exists
      const token = data.token;
      const user = data.result;
      
      if (!token) {
        console.error('⚠️ WARNING: No token received from server!');
        return rejectWithValue('No authentication token received from server');
      }
      
      // Save user to localStorage
      const profileData = { 
        result: user,
        token: token 
      };
      localStorage.setItem('profile', JSON.stringify(profileData));
      return user;
    } catch (error) {
      console.error('Sign up error:', error);
      console.error('Error response:', error.response?.data);
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
)