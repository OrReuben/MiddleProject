import { createSlice } from "@reduxjs/toolkit";

export const InputSlice = createSlice({
  name: "input",
  initialState: {
    objValue: [
      {
        username: "User",
        following: "",
        phoneNumber: "",
        pswRepeat: "",
        email: "",
        password: "",
      },
    ],
    cardObj: [
      {
        cardName: "",
        cardNumber: "",
        expDate: "",
        cvv: "",
      },
    ],
  },
  reducers: {
    addData: (state, action) => {
      state.objValue = [...state.objValue, action.payload];
      console.log(state.objValue);
    },
    addCard: (state,action) => {
      state.cardObj = [...state.cardObj, action.payload]
      console.log(state.cardObj);
    }
  },
});
export const { addData, addCard } = InputSlice.actions;
export const selectInput = (state) => state.input.objValue;
export default InputSlice.reducer;
