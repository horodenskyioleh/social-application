import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: {},
    },
    reducers: {
        addComment: (state, action ) => {
            const { postId, text } = action.payload;
            if ( !state.comments[postId] ) {
                state.comments[postId] = [];
            }
            state.comments[postId].push(text)
        }
    },
});

export const { addComment} = commentsSlice.actions;
export default commentsSlice.reducer;