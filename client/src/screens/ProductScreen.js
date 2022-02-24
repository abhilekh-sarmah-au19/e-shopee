import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";
import Spinner from "../components/Spinner";
import Error from "../components/Error";
export default function ProductScreen() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const [quantity, setquantity] = useState(1);

  const getproductbyidstate = useSelector(
    (state) => state.getProductByIdReducer
  );

  const { product, loading, error } = getproductbyidstate;

  function addtocart() {
    dispatch(addToCart(product, quantity))
  }

  useEffect(() => {
    dispatch(getProductById(id));
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner/>
      ) : error ? (
        <Error error ="Something Went Wrong...!!!"/>
      ) : (
        
        <div className="row">
          <h1 className="text-center fw-bolder">Category({product.category})</h1>
          <div className="col-md-6">
            <div className="card text-center p-5 m-2">
              <img
                src={product.image}
                className="img-fluid m-3 big-img"
                alt="Products"
              />
              <h1>{product.title}</h1>
              <p>{product.description}</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="m-2">
              <h1>Price: {product.price}$</h1>
              <hr />
              <h1>Select Quantity</h1>

              <select value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
                {[...Array(product.countInStock).keys()].map((x, i) => {
                  return <option value={i + 1}>{i + 1}</option>;
                })}
              </select>
              <hr />
              <button className="btn btn-dark" type="submit" onClick={addtocart}>
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
