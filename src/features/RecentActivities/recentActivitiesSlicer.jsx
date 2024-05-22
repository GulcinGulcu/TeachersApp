import { createSlice } from '@reduxjs/toolkit';
import { sub } from 'date-fns';

const initialState = [
  {
    id: 1,
    title: 'You logged in',
    date: sub(new Date(), { days: 7 }).toISOString(),
  },
  {
    id: 2,
    title: 'You logged in',
    date: sub(new Date(), { days: 15 }).toISOString(),
  },
];

export const recentActivitiesSlice = createSlice({
  name: 'recentActivities',
  initialState: initialState,
  reducers: {
    addActivity: (state, action) => {
      return [action.payload, ...state];
    },
    deleteActivity: (state, action) => {
      return state.filter((activity) => activity.id !== action.payload);
    },
  },
});

export const { addActivity, deleteActivity } = recentActivitiesSlice.actions;
export default recentActivitiesSlice.reducer;
