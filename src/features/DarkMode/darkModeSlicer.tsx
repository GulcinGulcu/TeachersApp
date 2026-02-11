import { createSlice } from '@reduxjs/toolkit';
import { DarkModeSliceState } from './models';

const initialState = {
  isDarkMode:
    localStorage.getItem('darkMode') === null
      ? true
      : localStorage.getItem('darkMode') === 'true',
};

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem('darkMode', String(state.isDarkMode));
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export const selectorDarkMode = (state: DarkModeSliceState) => state.darkMode;
export default darkModeSlice.reducer;
