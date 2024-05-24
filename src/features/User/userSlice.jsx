import { createSlice } from '@reduxjs/toolkit';

export const userLoggedIn = {
  isLoggedIn: false,
  username: '',
  fullName: '',
  email: '',
  password: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: userLoggedIn,
  reducers: {
    login: (state) => {
      return { ...state, isLoggedIn: true };
    },
    logout: (state) => {
      return { ...state, isLoggedIn: false };
    },
    updateUser: (state, action) => {
      return { ...state, username: action.payload };
    },
    registerUser: (state, action) => {
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password,
        email: action.payload.email,
        fullName: action.payload.fullName,
      };
    },
  },
});

export const { login, logout, updateUser, registerUser } = userSlice.actions;

export default userSlice.reducer;
