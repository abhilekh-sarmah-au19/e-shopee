import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {filterProducts} from "../actions/productActions";

export default function Filter() {


    const [searchkey, setsearchkey] = useState('')
    const[sort, setsort] = useState('popular')
    const[category, setcategory] = useState('all')

    const dispatch = useDispatch()
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-3 m-1">
          <input
          value={searchkey}
          onChange={(e)=>{setsearchkey(e.target.value)}}
            type="text"
            placeholder="search products"
            className="form-control"
          />
        </div>
        <div className="col-md-2 mt-3">
          <select className="form-control selection" value={sort} onChange={(e) =>{setsort(e.target.value)}}>
            <option value="popular">Popular</option>
            <option value="htl">High to Low</option>
            <option value="lth">Low to High</option>
          </select>
        </div>
        <div className="col-md-2 mt-3">
          <select className="form-control selection" value={category} onChange={(e) => {setcategory(e.target.value)}}>
            <option value="all">All</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's_clothing">Women's Clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
            <option value="men's_accessories">Men's Accessories</option>
          </select>
        </div>
        <div className="col-md-2 mt-3">
            <button className="btn btn-dark form-control" onClick={()=> {dispatch(filterProducts(searchkey, sort, category))}}><i class="fas fa-filter"></i> Filter</button>
        </div>
      </div>
    </div>
  );
}
