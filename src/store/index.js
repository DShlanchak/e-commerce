import { configureStore } from '@reduxjs/toolkit';
import filterReducer from '../redux/filter/filterSlice';

const store = configureStore({
  reducer: {
   filters: filterReducer,
  },
});

export default store;