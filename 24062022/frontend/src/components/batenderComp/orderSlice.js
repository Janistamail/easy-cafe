import { createSlice } from "@reduxjs/toolkit";

export const ordersReducers = createSlice({
  name: "user",
  initialState: {
    order: [],
  },
  reducers: {
    initHome: (state, action) => {
      // console.log('test',action.payload);
      // let res = action.payload.map((x) => {
      //     console.log(res);
      //   x.quantity = 1;
      //   return x;
      // });
      // console.log(res);
      
      // state.order = action.payload.map(x => {
      //   return {...action.payload, quantity: 1}
      // });

      state.order = action.payload.filter(x => {
        return x === {...action.payload.id_order}
      });



    },
    // increaseMenuOrder: (state, action) => {
    //   // console.log(action.payload);
    //   state.order[action.payload].quantity += 1;
    // },
    // decreaseMenuOrder: (state, action) => {
    //   if (state.order[action.payload].quantity > 0) {
    //     state.order[action.payload].quantity -= 1;
    //   }
    // },

  },
});

// Action creators are generated for each case reducer function
export const { initHome } = ordersReducers.actions;

export default ordersReducers.reducer;

//-------------------------------------------------------------------------

//     name: "orders",

//     initialState: {
//         ordersAll: [],
//     },

//     reducers: {
//         initAllOrders: (state, action) => {

//             let res = action.payload.map((x) => {
//                 x.quantity = 1;
//                 return x;
//             });
//             state.orders = res;
//         },
//         // getOrders: (state) => {
//         //     return state.selectedOrders;
//         // },
//         // setOrders: (state, action) => {
//         //     state.selectedOrders =action.payload.selected;
//         // },
//     },
// });

// export const { initAllOrders
//                 // , getOrders, setOrders
//             } = ordersReducers.actions;

// export default ordersReducers.reducer;