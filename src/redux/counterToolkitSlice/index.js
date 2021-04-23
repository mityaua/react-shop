import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 5,
  step: 15,
};

const { actions, reducer } = createSlice({
  name: 'counter/toolkit/slice',
  initialState,
  reducers: {
    onIncrement: (state, action) => {
      state.value += action.payload;
    },
    onDecrement: (state, action) => {
      state.value -= action.payload;
    },
    onSetStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

export const { onIncrement, onDecrement, onSetStep } = actions;

export default reducer;
