import React from "react";
import ProductList from "./ProductList";

import './Product.css'

const productsArray = [
    {
      id: 1,
      title: "Colors",
      price: 100,
      quantity:1,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
  
    {
      id: 2,
      title: "Black and white Colors",
      price: 50,
      quantity:1,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
  
    {
      id: 3,
      title: "Yellow and Black Colors",
      price: 70,
      quantity:1,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
  
    {
      id: 4,
      title: "Blue Color",
      price: 100,
      quantity:1,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  
  ];
  
  const AvaiableProducts =(props)=>{
    const productsList= productsArray.map(product=>(
      <ProductList
      id={product.id}
      key= {product.id}
      title= {product.title}
      img={product.imageUrl}
      price={product.price}
      quantity={product.quantity}
      />
    ))
  
  return(
  <React.Fragment>
      <div>
      <h3 className="product">MUSIC</h3>
         <ul className="Product-container">{productsList}</ul>
      </div>
      <button className="cart-button" onClick={props.onClick}>See the cart</button>
  </React.Fragment>
  )}
  
  export default AvaiableProducts;