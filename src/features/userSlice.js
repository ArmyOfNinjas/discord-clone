import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      // state.user += action;
      state.user = {
        uid: action.payload.uid,
        photo: action.payload.photo,
        email: action.payload.email,
        displayName: action.payload.displayName
      }
    },
    logout: (state) => {
      state.user = null;
    }
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
