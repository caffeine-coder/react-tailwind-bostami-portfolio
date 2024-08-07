import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './pageSlice';
import themeReducer from './themeSlice';

const store = configureStore({
  reducer: {
    page: pageReducer,
    theme: themeReducer,
  },
});

export default store;
