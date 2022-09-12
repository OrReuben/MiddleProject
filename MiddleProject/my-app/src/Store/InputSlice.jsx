import { createSlice } from "@reduxjs/toolkit";

export const InputSlice = createSlice({
  name: "input",
  initialState: {
    objValue: [
      {
        username: "User",
        url: "https://toppng.com/uploads/preview/instagram-default-profile-picture-11562973083brycehrmyv.png",
        following: "",
        phoneNumber: "",
        pswRepeat: "",
        email: "",
        password: "",
      },
    ],
    cardObj: [
      {
        date: "",
        cardName: "",
        cardNumber: "",
        expDate: "",
        cvv: "",
      },
    ],
    price: "",
  },
  reducers: {
    addData: (state, action) => {
      state.objValue = [...state.objValue, action.payload];
    },
    addCard: (state, action) => {
      state.cardObj = [...state.cardObj, action.payload];
      console.log(state.cardObj);
    },
    addPrice: (state, action) => {
      state.price = action.payload;
    },
  },
});
export const { addData, addCard, addPrice } = InputSlice.actions;
export const selectInput = (state) => state.input.objValue;
export default InputSlice.reducer;
