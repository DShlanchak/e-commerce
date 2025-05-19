import { configureStore } from '@reduxjs/toolkit';
import filterReducer from '../redux/filter/slice';
import cartReducer from '../redux/cart/slice';


const store = configureStore({
  reducer: {
   filter: filterReducer,
   cart: cartReducer
  },
});

export default store;