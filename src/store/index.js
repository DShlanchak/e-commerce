import { configureStore } from '@reduxjs/toolkit';
import filterReducer from '../redux/filter/filterSlice';
import shopReducer from '../redux/shopSlice';


const store = configureStore({
  reducer: {
   filters: filterReducer,
   shop: shopReducer,
  },
});

export default store;