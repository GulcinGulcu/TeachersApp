import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkMode: true,
};

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: initialState,
  reducers: {
    toggleDarkMode: (state) => {
      return { ...state, isDarkMode: !state.isDarkMode };
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
