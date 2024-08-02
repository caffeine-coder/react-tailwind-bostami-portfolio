// src/features/page/pageSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activePage: 'About',
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setActivePage: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.activePage = action.payload;
    },
  },
});

export const { setActivePage } = pageSlice.actions;

export default pageSlice.reducer;
