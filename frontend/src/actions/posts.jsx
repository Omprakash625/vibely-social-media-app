import { createAsyncThunk } from '@reduxjs/toolkit'
import * as api from '../api/posts'

export const getPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.fetchPosts();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const createPost = createAsyncThunk(
  'posts/createPost',
  async (post, { rejectWithValue }) => {
    try {
      const { data } = await api.createPost(post);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const updatePost = createAsyncThunk(
  'posts/updatePost',
  async ({ id, post }, { rejectWithValue }) => {
    try {
      const { data } = await api.updatePost(id, post);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    } 
  }
)

export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (id, { rejectWithValue }) => {
    try {
      await api.deletePost(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const likePost = createAsyncThunk(
  'posts/likePost',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.likePost(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)