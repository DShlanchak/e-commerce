import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  values: {
    from: '',
    to: '',
    discounted: false,
    sortBy: '',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action) {
      const { name, value } = action.payload;
      state.values[name] = value;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;