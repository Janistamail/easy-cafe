import { createSlice } from "@reduxjs/toolkit";

export const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    bodyRequestAPI: {},
    readyToPayment: false,
  },
  reducers: {
    createBodyRequestAPI: (state, action) => {
      function makeid(length) {
        var result = "";
        var characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
          );
        }
        return result;
      }

      const setProduct = action.payload.orderInCart.map((x) => ({
        name: x.productName,
        quantity: x.quantity,
        price: x.total / parseInt(x.quantity),
      }));
      console.log("setProduct", setProduct);

      state.bodyRequestAPI = {
        amount: action.payload.total,
        currency: "THB",
        orderId: makeid(5), //แก้
        packages: [
          {
            id: makeid(5),
            amount: action.payload.total,
            name: "easy cafe",
            products: setProduct,
          },
        ],
        redirectUrls: {
          confirmUrlType: "CLIENT",
          confirmUrl: "https://2496-49-237-18-153.ap.ngrok.io/confirm",
          cancelUrl:
            "https://w7.pngwing.com/pngs/52/84/png-transparent-no-symbol-icon-cancel-s-angle-text-symmetry-thumbnail.png",
        },
      };
      state.readyToPayment = true;
      // console.log("body", action.payload);
    },
    setFalseReadyToPayment: (state, action) => {
      state.readyToPayment = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { createBodyRequestAPI, setFalseReadyToPayment } =
  paymentSlice.actions;

export default paymentSlice.reducer;
