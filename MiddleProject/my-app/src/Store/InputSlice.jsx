import { createSlice } from "@reduxjs/toolkit";

export const InputSlice = createSlice({
  name: "input",
  initialState: {
    objValue: [],
  },
  reducers: {
    addData: (state, action) => {
      state.objValue = [...state.objValue, action.payload]
      console.log(state.objValue);
    },
 
  },
});
export const { addData } = InputSlice.actions;
export const selectInput = (state) => state.input.objValue;
export default InputSlice.reducer;
