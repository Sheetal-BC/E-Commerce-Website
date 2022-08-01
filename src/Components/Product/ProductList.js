import React from "react";

import './ProductList.css'

const ProductList = (props) => {
    const imgsrc = props.img;
    const price = `$${props.price.toFixed(2)}`
    return (
      <React.Fragment>
        <ul>
          <div className="product-title">
  
            <h4> {props.title} </h4>
          </div>
          <div  className="image-container">
            <img src={imgsrc} alt="products" />
          </div>
          <div className="product-price">
            <h4 className="product-num">{price}</h4>
            <button className="btn">ADD TO CART</button>
          </div>
        </ul>
      </React.Fragment>
    );
  };
  
  export default ProductList;