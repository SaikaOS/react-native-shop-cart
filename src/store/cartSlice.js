import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clickedID: 0,
  inputFocus: false,
  inputValue: "",
  cartProducts: [],
  isSelected: false,
  selectedItems: [],
  count: 1,
  isAdded: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setClickedID: (state, action) => {
      state.clickedID = action.payload;
    },
    setInputFocus: (state, action) => {
      state.inputFocus = action.payload;
    },
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    addProductsToCard: (state, action) => {
      const exists = state.cartProducts.find(item => item === action.payload)
      if(exists) {
      return state.cartProducts.map(item => {
        if(item.title === action.payload) {
          return {
            ...item,
            quantity: item.quantity + 1
          }
        }
        return item
      })
      } else {
      const tempItem = {...action.payload, quantity: 1}
      state.cartProducts.push(tempItem)
      }
      state.isAdded = true
    },
    removeItemFromCart: (state, action) => {
      const nextCartItems = state.cartProducts.filter(
        item => item.title !== action.payload
      )
      state.cartProducts = nextCartItems
      state.isAdded = true
    },
    removeAllProductsFromCart: (state) => {
      state.cartProducts.length = 0;
    },
    removeAllSelectedItems: (state) => {
      state.selectedItems.length = 0;
    },
    addSelectedItems: (state, action) => {
      state.selectedItems.push(action.payload)
    },
    removeSelectedItems: (state, action) => {
          const nextCartItems = state.selectedItems.filter(
            item => item.title !== action.payload
          )
          state.selectedItems = nextCartItems
    }
  },
});

export const {
  setClickedID,
  setInputFocus,
  setInputValue,
  addProductsToCard,
  removeItemFromCart,
  removeAllProductsFromCart,
  addSelectedItems,
  removeSelectedItems,
  removeAllSelectedItems,
  calculateSum,
} = cartSlice.actions;

export default cartSlice.reducer;
