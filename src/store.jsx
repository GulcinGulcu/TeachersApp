import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Features/User/userSlice';
import listReducer from './Features/List/listSlicer';
import studentReducer from './Features/Student/studentSlicer';
import recentActivitiesReducer from './Features/RecentActivities/recentActivitiesSlicer';
import darkModeReducer from './Features/DarkMode/darkModeSlicer';

export default configureStore({
  reducer: {
    user: userReducer,
    list: listReducer,
    student: studentReducer,
    recentActivities: recentActivitiesReducer,
    darkMode: darkModeReducer,
  },
});
