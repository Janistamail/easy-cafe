import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    // selectedCategory: "",
  },
  reducers: {
    initproducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { initproducts } =
productsSlice.actions;

export default productsSlice.reducer;
