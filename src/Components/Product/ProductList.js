import React, { useContext } from "react";
import {  NavLink } from "react-router-dom";
import CartContext from "../../Store/CartContext";
import './ProductList.css'

const ProductList = (props) => {
  const cartCntxt = useContext(CartContext);
 
 
 
    
   
    const addToCart =  async (event) => {
      event.preventDefault();
      console.log('props', props);
      const arr = {
        id: props.id,
        title: props.title,
        imgsrc: props.img,
        price: props.price,
        quantity:props.quantity
      };
      cartCntxt.addItem(arr);

      
    };

    const imgsrc = props.img;
    const price = `$${props.price.toFixed(2)}`;
    return (
      <React.Fragment>
        <ul>
       
          <div className="product-title">
  
            <h4> {props.title} </h4>
          </div>
          <NavLink to = {`/store/${props.id}`}>
          <div  className="image-container">
            <img src={imgsrc} alt="products" />
          </div>
          </NavLink>
          <div className="product-price">
            <h4 className="product-num">{price}</h4>
            <button className="btn" onClick={addToCart}>ADD TO CART</button>
          </div>
          
        </ul>
      </React.Fragment>
    );
  };
  
  export default ProductList;