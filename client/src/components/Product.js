import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import Rating from "react-rating";

export default function Product({ product }) {
  return (
    <div className="text-center">
      <div>
        <Link to={`product/${product._id}`}>
          <img src={product.image} className="img-fluid" alt="products" />
          </Link>
          <h1>{product.title}</h1>
          <div>
            <Rating
              initialRating={product.rating}
              fractions={2}
              readonly={true}
            />
          </div>{" "}
          <span className="5">
            {" "}
            {product.rating}
            <StarIcon color="warning" fontSize="smaller" />
          </span>
          <h1>Price: {product.price} $</h1>
          <h1> {product.category}</h1>
        
      </div>
    </div>
  );
}
