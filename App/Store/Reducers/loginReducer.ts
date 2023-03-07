import {createSlice} from '@reduxjs/toolkit';

const login = createSlice({
  name: 'login',
  initialState: {
    count: 0,
  },
  reducers: {
    increment: state => {
      state.count += 1;
    },
    decrement: state => {
      state.count -= 1;
    },
  },
});

export const {increment, decrement} = login.actions;

export default login.reducer;
