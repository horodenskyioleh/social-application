// import { createSlice } from "@reduxjs/toolkit";

// const authSlice = createSlice({
//     name: 'auth',
//     initialState: {
//         user: null,
//     },
//     reducers: {
//         login: (state, action) => {
//             state.user = action.payload;
//         },
//         logout: (state) => {
//             state.user = null;
//         },

//     },
// });

// export const {login, logout} = authSlice.actions;
// export default authSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//const API_URL = 'http://localhost:8080/users'
const API_URL = 'http://localhost:8080'


//register
export const registerUser = createAsyncThunk('auth/registerUser', async (userData) => {
    //const responce = await axios.post(API_URL, userData)
    const responce = await axios.post(`${API_URL}/users`, userData)
    return responce.data;
});

//login
export const loginUser = createAsyncThunk('auth/loginUser', async ({email, password}) => {
    //const responce = await axios.get(`${API_URL}?email=${email}`);
    const responce = await axios.get(`${API_URL}/users?email=${email}`);
    const user = responce.data[0];

    if (user && user.password === password) {
        localStorage.setItem('user', JSON.stringify(user));
        return user;
    } else {
        throw new Error("Login or Password is wrong");
    }
});

//logout
export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
    localStorage.removeItem('user');
    return null;
});

// --- Отримуємо друзів ---
export const fetchFriends = createAsyncThunk('auth/fetchFriends', async () => {
    const response = await axios.get(`${API_URL}/friends`);
    return response.data;
  });
  
  // --- Додаємо друга ---
  export const addFriend = createAsyncThunk('auth/addFriend', async (friend) => {
    await axios.post(`${API_URL}/friends`, { name: friend });
    return friend;
  });
  
  // --- Отримуємо повідомлення ---
  export const fetchMessages = createAsyncThunk('auth/fetchMessages', async () => {
    const response = await axios.get(`${API_URL}/messages`);
    return response.data;
  });
  
  // --- Відправляємо повідомлення ---
  export const sendMessage = createAsyncThunk('auth/sendMessage', async (message) => {
    await axios.post(`${API_URL}/messages`, message);
    return message;
  });

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: JSON.parse(localStorage.getItem('user')) || null,
        error: null,
        friends: [],
        messages: [],
    },
    reducers: {
        // addFriend: (state, action) => {
        //     if (!state.friends.includes(action.payload)) {
        //         state.friends.push(action.payload)
        //     }
        // },
        // sendMessage: (state, action) => {
        //     state.messages.push(action.payload)
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.fulfilled, (state, action) => {
                state.user = action.payload
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(logoutUser.fulfilled, (state, action) => {
                state.user = null;
            })
            .addCase(fetchFriends.fulfilled, (state, action) => {
                state.friends = action.payload;
              })
            .addCase(addFriend.fulfilled, (state, action) => {
                state.friends.push(action.payload);
              })
            .addCase(fetchMessages.fulfilled, (state, action) => {
                state.messages = action.payload;
              })
            .addCase(sendMessage.fulfilled, (state, action) => {
                state.messages.push(action.payload);
              });

    }
})

// export const {addFriend, sendMessage} = authSlice.actions;
export default authSlice.reducer;