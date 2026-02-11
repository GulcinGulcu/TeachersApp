import { createSlice } from '@reduxjs/toolkit';
import { sub } from 'date-fns';
import { RecentActivitiesSliceState } from './models';

const initialState = [
  {
    id: '1',
    title: 'Classroom "Math 101" created.',
    date: sub(new Date(), { days: 7 }).toISOString(),
  },
  {
    id: '2',
    title: 'Demo: Assignment shared.',
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
export const selectorRecentActivities = (state: RecentActivitiesSliceState) =>
  state.recentActivities;
export default recentActivitiesSlice.reducer;
