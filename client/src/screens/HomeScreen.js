import React from "react";
import axios from "axios";
import Product from "../components/Product";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../actions/productActions";
import Spinner from "../components/Spinner";
import Error from "../components/Error";
import Filter from "../components/Filter";

export default function HomeScreen() {
  const getallproductsstate = useSelector(
    (state) => state.getAllProductsReducer
  );

  const { loading, products, error } = getallproductsstate;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div>
      <Filter/>
      <div className="row justify-content-center mt-5">
        {loading ? (
         <Spinner/>
        ) : error ? (
          <Error error ="Something Went Wrong...!!!"/>
        ) : (
          products.map(product =>{
            return <div className="col-md-3 p-2">
              <Product product={product}/>
            </div>
          })
        )}
      </div>
    </div>
  );
}
