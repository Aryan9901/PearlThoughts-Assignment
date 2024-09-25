import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recurrence: 'daily',
  interval: 1,
  startDate: null,
  endDate: null,
  bool:false
};

const recurrenceSlice = createSlice({
  name: 'recurrence',
  initialState,
  reducers: {
    setRecurrence: (state, action) => {
      state.recurrence = action.payload;
    },
    setBoolean: (state, action) => {
      if(state.bool == true){
        state.boolean = false
      }else{
        state.boolean = true
      }
    },
    setInterval: (state, action) => {
      state.interval = action.payload;
    },
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload;
    },
  },
});

export const { setRecurrence, setBoolean, setInterval, setStartDate, setEndDate } = recurrenceSlice.actions;
export default recurrenceSlice.reducer;
