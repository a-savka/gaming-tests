
import { createSlice } from "@reduxjs/toolkit";

interface CounterRState {
  value: number;
}

const initialState: CounterRState = {
  value: 0
};

const counterRSlice = createSlice({
  name: 'counter-r',
  initialState,
  reducers: {
    increment: (state) => ({ ...state, value: state.value + 1})
  }
});

export const { increment } = counterRSlice.actions;
export default counterRSlice.reducer;
