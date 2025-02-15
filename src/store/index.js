import { configureStore } from '@reduxjs/toolkit';
import filterReducer from '../redux/filters/FilterSlice';

const store = configureStore({
  reducer: {
   filters: filterReducer,
  },
});

export default store;