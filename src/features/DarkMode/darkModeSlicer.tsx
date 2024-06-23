import { createSlice } from '@reduxjs/toolkit';
import { DarkModeSliceState } from './models';

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
export const selectorDarkMode = (state: DarkModeSliceState) => state.darkMode;
export default darkModeSlice.reducer;
