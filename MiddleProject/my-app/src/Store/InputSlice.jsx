import { createSlice } from "@reduxjs/toolkit";

export const InputSlice = createSlice({
  name: "input",
  initialState: { value: "name" },
  reducers: {
    incrament: (state) => {
      state.value = "hello world";
    },
    decrament: (state) => {
      state.value = "Or Reuben";
    },
  },
});
export const { incrament, decrament } = InputSlice.actions;
export const selectInput = (state) => state.input.value;
export default InputSlice.reducer;
