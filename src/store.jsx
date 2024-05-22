import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/User/userSlice';
import listReducer from './features/List/listSlicer';
import studentReducer from './features/Student/studentSlicer';
import recentActivitiesReducer from './features/RecentActivities/recentActivitiesSlicer';
import darkModeReducer from './features/DarkMode/darkModeSlicer';

export default configureStore({
  reducer: {
    user: userReducer,
    list: listReducer,
    student: studentReducer,
    recentActivities: recentActivitiesReducer,
    darkMode: darkModeReducer,
  },
});
