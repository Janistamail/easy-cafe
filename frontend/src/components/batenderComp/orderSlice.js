import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "order",
  initialState: {
   
  },
  reducers: {
    
  },
});

// Action creators are generated for each case reducer function
export const { initAllCategory, getCurrentCategory, setCurrentCategory } =
  orderSlice.actions;

export default orderSlice.reducer;
