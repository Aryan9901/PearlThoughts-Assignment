import { configureStore } from '@reduxjs/toolkit';
import recurrenceReducer from './recurrenceSlice';

export const store = configureStore({
  reducer: {
    recurrence: recurrenceReducer,
  },
});
