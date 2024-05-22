import { createSlice } from '@reduxjs/toolkit';
import { studentData } from './studentData';

export const studentSlice = createSlice({
  name: 'student',
  initialState: studentData,
  reducers: {
    addStudent: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { addStudent } = studentSlice.actions;
export default studentSlice.reducer;
