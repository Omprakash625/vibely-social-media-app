import { createSlice } from '@reduxjs/toolkit'
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from '../actions/posts'

const initialState = {
  posts: [],
  loading: false,
  error: null,
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET POSTS
      .addCase(getPosts.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.posts = action.payload
        state.loading = false
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      // CREATE POST
      .addCase(createPost.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.push(action.payload)
        state.loading = false
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      // UPDATE POST
      .addCase(updatePost.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        const index = state.posts.findIndex(
          (post) => post._id === action.payload._id
        )
        if (index !== -1) {
          state.posts[index] = action.payload
        }
        state.loading = false
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      // DELETE POST
      .addCase(deletePost.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter(
          (post) => post._id !== action.payload
        )
        state.loading = false
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      // LIKE POST
      .addCase(likePost.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(likePost.fulfilled, (state, action) => {
        const index = state.posts.findIndex(
          (post) => post._id === action.payload._id
        )
        if (index !== -1) {
          state.posts[index] = action.payload
        }
        state.loading = false
      })
      .addCase(likePost.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export default postsSlice.reducer
