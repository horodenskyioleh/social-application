import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:8080';

// --- Отримати всі пости ---
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get(`${API_URL}/posts`);
  return response.data;
});

// --- Додати пост ---
export const addPost = createAsyncThunk('posts/addPost', async (newPost) => {
  const response = await axios.post(`${API_URL}/posts`, newPost);
  return response.data;
});

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      });
  },
});

export default postSlice.reducer;
