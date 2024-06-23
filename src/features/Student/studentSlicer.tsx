import { createSlice } from '@reduxjs/toolkit';
import { studentData } from './studentData';
import { StudentSlicerState } from './models';

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
export const selectorStudent = (state: StudentSlicerState) => state.student;
export default studentSlice.reducer;
