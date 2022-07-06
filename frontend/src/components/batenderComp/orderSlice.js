import { createSlice } from "@reduxjs/toolkit";

export const ordersReducers = createSlice({
  name: "orders",
  initialState: {
    order: [],
  },
  reducers: {
    initHome: (state, action) => {
      console.log('test', action.payload);

      for (let i=0; i<action.payload.length; i++) {
        console.log("i", i)
        
        let ans = action.payload.filter(x=> action.payload[i].id_order===x.id_order);
        console.log("12333",ans);
        state.order.push({id_order: ans[0].id_order,
                          product: [...ans]
        })
        
 }


      // let id = 1;
      // const res = action.payload.filter((x) => {
      //   console.log('test2',x)
      //   x.id_order === id;

      //   return x;
      //   })
        
        // .map(filteredOrder => ( {filteredOrder}))
        // console.log('test3',filteredOrder)
      // } 
        // .map(filteredOrder => ( {filteredOrder}))
        // console.log('test2',x);
        // state.order = res
    
    

      //------------------------------------------------

      // let res = action.payload.map((x) => {
      //     // console.log('test2',x);
      //   x.quantity = 1;
      //   return x;
      // });
      // state.order = res;
    }
      //-----------------------------------------------

      // state.order = action.payload.map(x => {
      //   return {...action.payload, quantity: 1}
      // });
      //-----------------------------------------------
      // state.order = action.payload.filter(x => {
      //   return x === {...action.payload.id_order}
      // });
      //-----------------------------------------------


    },
    
});

// Action creators are generated for each case reducer function
export const { initHome } = ordersReducers.actions;

export default ordersReducers.reducer;