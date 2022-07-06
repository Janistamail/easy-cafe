import { createSlice } from "@reduxjs/toolkit";

export const cateEditSlice = createSlice({
  name: "anycate",
  initialState: {
    anycate: [],
    selectedCategory: "",
  },
  reducers: {
    initEditCate: (state, action) => {
      console.log(action.payload);
      state.anycate = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { initEditCate } = cateEditSlice.actions;

export default cateEditSlice.reducer;
