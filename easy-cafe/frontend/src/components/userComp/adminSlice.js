import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
    name: "product",
    initialState:{
        product: [],
        categorySelect: "" ,
    },

    reducers:{
        initProduct:(state, action)=>{
            state.product = action.payload
        },
        categorySelect:(state)=>{
            return state.categorySelect;
        }
    }
})

export const { initProduct, categorySelect } = adminSlice.actions;
export default adminSlice.reducer