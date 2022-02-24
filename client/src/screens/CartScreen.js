import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../actions/cartActions";
import Checkout from "../components/Checkout";

export default function CartScreen() {
  const cartreducerstate = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const { cartItems } = cartreducerstate;

  var subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  var item = cartItems;

  return (
    <div>
      <div className="row row-cols-1 row-cols-md-2 mx-2 g-4">
        <div className="col card">
          <h1 className="text-start fw-bolder mt-3 mx-5">
            MY CART ({item.length})
          </h1>
          <hr />
          <div>
            {cartItems.map((item) => {
              return (
                <>
                  <div className="row">
                    <div className="col-sm-4 card">
                      <div className="card-body">
                        <img
                          src={item.image}
                          className="img-fluid img_cart"
                          alt="product"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <h1 className="card-title">{item.title}</h1>
                      <h1 className=" fw-bolder">
                      {item.category}
                      </h1>

                      <h1>{item.price}$</h1>

                      <select
                        value={item.quantity}
                        onChange={(e) => {
                          dispatch(addToCart(item, e.target.value));
                        }}
                      >
                        {[...Array(item.countInStock).keys()].map((x, i) => {
                          return <option value={i + 1}>{i + 1}</option>;
                        })}
                      </select>
                      <h1>{item.quantity * item.price}$</h1>
                      <button
                        onClick={() => {
                          dispatch(deleteFromCart(item));
                        }}
                        className="btn btn-danger"
                      >
                        REMOVE{" "}
                        <i
                          className="fas fa-times-circle"
                          style={{ color: "white" }}
                        ></i>
                      </button>
                    </div>
                  </div>
                  <hr />
                </>
              );
            })}
          </div>
        </div>
        <div
          className="col-4 mx-5 card_details text-start card"
          style={{ width: "16rem" }}
        >
          <div className="card-body">
            <h1 className="text-center">Price Details</h1>
            <hr />
            <h5>Total Items: ({item.length} Item)</h5>
            <hr />
            <h5 className="fw-bolder">SubTotal: {subtotal}$</h5>

            <hr />
            <Checkout amount={subtotal}/>

          </div>
        </div>
      </div>
    </div>
  );
}
