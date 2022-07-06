import React from "react";
import { useEffect } from "react";

const Payment = () => {
    useEffect(()=> {
        const requestApiBody = {
            amount: 2,
            currency: "THB",
            orderId: "00BB1A",
            packages: [
              {
                id: "01A",
                amount: 2,
                name: "Toy Package",
                products: [
                  {
                    name: "ตุ๊กตา Cony",
                    quantity: 1,
                    price: 1,
                  },
                  {
                    name: "ตุ๊กตา Sally",
                    quantity: 1,
                    price: 1,
                  },
                ],
              },
            ],
            redirectUrls: {
              confirmUrlType: "CLIENT",
              confirmUrl:
                "https://google.com/?success=true",
              cancelUrl:
                "https://google.com/?success=false",
            }
    }}, [])
  return <div>Payment</div>;
};

export default Payment;
