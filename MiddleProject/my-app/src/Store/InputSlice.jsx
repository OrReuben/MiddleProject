import { createSlice } from "@reduxjs/toolkit";

export const InputSlice = createSlice({
  name: "input",
  initialState: {
    objValue: [
      {
        Checkbox: true,
        ConfirmPassword: "12345678",
        Date: "2022-09-20",
        Mail: "orreuven1243@gmail.com",
        Password: "12345678",
        PhoneNumber: 123456789,
        Username: "User!",
      },
    ],
    number: 0
  },
  reducers: {
    addData: (state, action) => {
      state.objValue = [...state.objValue, action.payload];
      console.log(state.objValue);
    },
    // indexNumber: (state) => {
    //   state.number = state.number+1  
    //   console.log(state.number);
    // },

  },
});
export const { addData } = InputSlice.actions;
export const selectInput = (state) => state.input.objValue;
export default InputSlice.reducer;
