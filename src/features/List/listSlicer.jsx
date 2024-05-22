import { createSlice } from '@reduxjs/toolkit';
import { listData } from './listData';

export const listSlice = createSlice({
  name: 'list',
  initialState: listData,
  reducers: {
    addItem: (state, action) => {
      return [action.payload, ...state];
    },
    deleteItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    editItem: (state, action) => {
      const { id, editedItem } = action.payload;
      return state.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            content: editedItem,
          };
        } else {
          return item;
        }
      });
    },
  },
});

export const { addItem, deleteItem, editItem } = listSlice.actions;
export default listSlice.reducer;
