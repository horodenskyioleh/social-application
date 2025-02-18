import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice';
import postsReducer from './slices/postsSlice'
import friendsReducer from './slices/friendsSlice'
import commentsReducer from './slices/commentsSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        posts: postsReducer,
        friends: friendsReducer,
        comments: commentsReducer,
    },
});

