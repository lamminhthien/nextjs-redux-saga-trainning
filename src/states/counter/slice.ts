import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
}

export const initialState: CounterState = {
  value: 9
};

const counterSlice = createSlice({
  name: 'thien',
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    incrementByAmountRequest() {},
    incrementByAmountSuccess(state, action: PayloadAction<number>) {
      console.log('incrementByAmountSuccess', action);
      state.value += action.payload;
    },
    incrementByAmountFailure(state) {
      console.log('incrementByAmountFailure');
      state.value -= 10;
    }
  }
});

export default counterSlice;
