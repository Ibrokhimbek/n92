import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 5,
  },
  reducers: {
    increment(state, action) {
      state.count += 1;
    },
    decrement(state, action) {
      state.count -= 1;
    },
    addTwice(state, action) {
      console.log(action);
    },
  },
});

export const { increment, decrement, addTwice } = counterSlice.actions;

export default counterSlice.reducer;
