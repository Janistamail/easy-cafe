import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    // isLoggedIn: false,
    lineId: "",
    data: null,
    status: "",
  },
  reducers: {
    initData: (state, action) => {
      state.data = action.payload;
    },
    initLineId: (state, action) => {
      state.lineId = action.payload;
    },
    // setLogin: (state) => {
    //   state.isLoggedIn = true;
    // },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export default AuthSlice.reducer;

export const { initData, initLineId, setLogin, setStatus } = AuthSlice.actions;
