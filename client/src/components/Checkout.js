import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch } from "react-redux";
import { placeOrder } from "../actions/orderActions";
export default function Checkout({ amount }) {
  const dispatch = useDispatch();

  function tokenHandler(token) {
    dispatch(placeOrder(token, amount));
  }

  return (
    <div>
      <StripeCheckout
        token={tokenHandler}
        amount={amount * 100}
        shippingAddress
        currency="USD"
        stripeKey="pk_test_51KTPofSBrNqb5kEYz7G9gCpeQiJrcilregqbiFMKLipZRHrzKVKJTvWxcE4S0vc7h738oeUGqGgl1QbvQjKEy6tN0096UmnwNY"
      >
        <button className="btn btn-dark p-3">PAY NOW</button>
      </StripeCheckout>
    </div>
  );
}
