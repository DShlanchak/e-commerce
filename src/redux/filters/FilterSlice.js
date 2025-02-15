import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  priceRange: { from: '', to: '' },
  discounted: false,
  sortBy: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    updateFilters(state, action) {
      return { ...state, ...action.payload };
    },
    updateSort(state, action) {
      state.sortBy = action.payload;
    },
  },
});

export const { updateFilters, updateSort } = filterSlice.actions;
export default filterSlice.reducer;