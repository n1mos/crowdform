import {configureStore} from '@reduxjs/toolkit';
import fundReducer from './Reducers/fundReducer';

export const store = configureStore({
  reducer: {
    fund: fundReducer,
  },
});
