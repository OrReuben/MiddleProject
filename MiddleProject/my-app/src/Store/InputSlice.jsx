import { createSlice } from "@reduxjs/toolkit";

export const InputSlice = createSlice({
  name: "input",
  initialState: {
    objValue: [
      {
        username: "User",
        url: "/static/images/avatar/2.jpg",
        following: "",
        phoneNumber: "",
        pswRepeat: "",
        email: "",
        password: "",
      },
    ],
    cardObj: [
      {
        date: "07/09/2022",
        cardName: "",
        cardNumber: "",
        expDate: "",
        cvv: "",
      },
    ],
    price: ""
  },
  reducers: {
    addData: (state, action) => {
      state.objValue = [...state.objValue, action.payload];
    },
    addCard: (state, action) => {
      state.cardObj = [...state.cardObj, action.payload];
    },
    addPrice: (state, action) => {
      state.price = action.payload
    }
  },
});
export const { addData, addCard, addPrice } = InputSlice.actions;
export const selectInput = (state) => state.input.objValue;
export default InputSlice.reducer;
