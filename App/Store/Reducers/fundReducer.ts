import { createSlice } from '@reduxjs/toolkit';

const fund = createSlice({
  name: 'fund',
  initialState: {
    mocked: {
      returns: '31.82%',
    },
  },
  reducers: {
  },
});

export const selectMocked = state => state.mocked;

export default fund.reducer;
