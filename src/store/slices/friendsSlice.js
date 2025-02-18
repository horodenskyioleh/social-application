import { createSlice } from "@reduxjs/toolkit";

const friendsSlice = createSlice({
    name: 'friends',
    initialState: {
        friends: [],
    },
    reducers: {
        addFriend: (state, action) => {
            state.friends.push(action.payload);
        },
        removeFriend: (state, action) => {
            state.friends = state.friends.filter( (friend) => friend.id !== action.payload )
        },
    },
});

export const { addFriend, removeFriend} = friendsSlice.actions;
export default friendsSlice.reducer;