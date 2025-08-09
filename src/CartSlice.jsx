import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const {  name, image ,cost } = action.payload;
      // Check if the item already exists in the cart
      const existingItem = state.items.find(i => i.name === name);
      if (existingItem) {
        // If it exists, update the quantity
        existingItem.quantity++;
      } else {
        // If it doesn't exist, add it to the cart
        state.items.push({ name, image, cost, quantity: 1 });
      }
    
    },
    removeItem: (state, action) => {
      // Remove the item from the cart
      state.items = state.items.filter(i => i.name !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      // Find the item in the cart
      const existingItem = state.items.find(i => i.name === name);
      if (existingItem) {
        // If it exists, update the quantity
        existingItem.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
