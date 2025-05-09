import { configureStore } from '@reduxjs/toolkit';
import filterReducer from '../redux/filter/slice';
import shopReducer from '../redux/shopSlice';


const store = configureStore({
  reducer: {
   filter: filterReducer,
   shop: shopReducer,
  },
});

export default store;