import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = 'https://jsonplaceholder.typicode.com/posts' //fake api
//getting posts
export const fetchPosts = createAsyncThunk('posts/fetchPost', async () => {
    const responce = await axios.get(API_URL);
    return responce.data.slice(0,10) //taking 10 posts
});

//Add post
export const addPost = createAsyncThunk('posts/addPost', async (post) => {
    const responce = await axios.post(API_URL, post);
    return responce.data;
});

export const deletePost = createAsyncThunk('posts/deletePost', async (postId) => {
    //await axios.delete(`${API_URL}/${postId}`);
    return postId;
});

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        status: 'idle',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
            })
            .addCase(addPost.fulfilled, (state, action) => {
                // state.posts = state.posts.push(action.payload)
                state.posts.push(action.payload)
                
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.posts = state.posts.filter( (post) => post.id !== action.payload)
            })
    }
})

export default postsSlice.reducer;
