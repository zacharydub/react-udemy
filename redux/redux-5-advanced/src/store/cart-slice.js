import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "../../../redux-4-toolkitPractice/src/store/ui-slice";
import { uiAction } from "./ui-slice";

const initialCartState = { items: [], totalQuantity: 0, totalAmount: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      state.totalQuantity++;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        //let index = state.items.findIndex((item) => item.id === id);
        //state.items.splice(index, 1);
        state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions; //this creates the actions under the hood so we didnt need to explicitly create them above in the reducers
export default cartSlice.reducer;
